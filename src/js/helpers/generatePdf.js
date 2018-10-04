import jsPDF				from 'jspdf';
import moment				from 'moment';

moment.locale('fr', {
  months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
  monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
  weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
  longDateFormat : {
    LT : "HH:mm",
    LTS : "HH:mm:ss",
    L : "DD/MM/YYYY",
    LL : "D MMMM YYYY",
    LLL : "D MMMM YYYY LT",
    LLLL : "dddd D MMMM YYYY LT"
  },
  calendar : {
    sameDay: "[Aujourd'hui à] LT",
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : "dans %s",
    past : "il y a %s",
    s : "quelques secondes",
    m : "une minute",
    mm : "%d minutes",
    h : "une heure",
    hh : "%d heures",
    d : "un jour",
    dd : "%d jours",
    M : "un mois",
    MM : "%d mois",
    y : "une année",
    yy : "%d ans"
  },
  ordinalParse : /\d{1,2}(er|ème)/,
  ordinal : function (number) {
    return number + (number === 1 ? 'er' : 'ème');
  },
  meridiemParse: /PD|MD/,
  isPM: function (input) {
    return input.charAt(0) === 'M';
  },
  // in case the meridiem units are not separated around 12, then implement
  // this function (look at locale/id.js for an example)
  // meridiemHour : function (hour, meridiem) {
  //     return /* 0-23 hour, given meridiem token and hour 1-12 */
  // },
  meridiem : function (hours, minutes, isLower) {
    return hours < 12 ? 'PD' : 'MD';
  },
  week : {
    dow : 1, // Monday is the first day of the week.
    doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});


((API => {
    API.myText = function(txt, options={}, x, y) {
        if( options.align == "center" && txt){
            var fontSize = this.internal.getFontSize();
            var pageWidth = this.internal.pageSize.width;
            var txtWidth = this.getStringUnitWidth(txt)*fontSize/this.internal.scaleFactor;
            x = ( pageWidth - txtWidth ) / 2;
        }
        if ( options.align == "right" && txt) {
            var fontSize = this.internal.getFontSize();
            var pageWidth = this.internal.pageSize.width;
            var txtWidth = this.getStringUnitWidth(txt)*fontSize/this.internal.scaleFactor;
        	x = (typeof x != "undefined" ? (( pageWidth - txtWidth ) - x) : ( pageWidth - txtWidth ) );
        }
        this.text(txt,x,y);
    };

	API.setGreyRect = function(posX, posY, width, height) {
		this.setDrawColor(0);
		this.setFillColor(252,252,252);
		this.rect(posX, posY, width, height, 'F');
	};

	API.setFirstTitle = function() {
		this.setFontSize(24);
		this.setFontType("bold");
	};

	API.setTitle = function() {
		this.setFontSize(16);
		this.setTextColor(0,0,0);
	};

	API.setSmallText = function() {
		this.setFontSize(12);
		this.setTextColor(0,0,0);
	};

	API.setText = function() {
		this.setFontSize(16);
		this.setTextColor(200,200,200);
	};

	API.setItalic = () => {
		doc.setFont("Helvetica", "italic");
	};

	API.setBold = () => {
		doc.setFont("Helvetica", "bold");
	};


	API.resetText = function() {
		this.setFontSize(16);
		this.setTextColor(0,0,0);
		this.setFont("Helvetica");
	};

	API.borderBottom = function(x, y, width, alpha) {
		this.setDrawColor(0);
		if (alpha == "dark")
			this.setFillColor(220,220,220);
		else
			this.setFillColor(alpha,alpha,alpha);
		this.rect(x, y, width, 0.1, 'F');
	};

  API.borderLeft = function(x, y, height, alpha) {
		this.setDrawColor(0);
		if (alpha == "dark")
			this.setFillColor(220,220,220);
		else
			this.setFillColor(alpha,alpha,alpha);
		this.rect(x, y, 0.1, height, 'F');
	};

}))(jsPDF.API);


export default function generatePdf(data) {

    const doc = new jsPDF();
    const date = moment();
    doc.resetText();

    const totalY = 297; // portrait A4
    const totalX = 210; // portrait A4
    const offsetX = 12;
    const sizeOfFullSeparator = 190;
    let currentPage = 1;
    let totalPages = 0;
    let title;
    let posY;
    const paginationPosY = totalY - offsetX;
    const currency = data.settings.currency;
    const decreaseText = ["REDUCTIONS", "VALEUR", "MONTANT"];
    const increaseText = ["MAJORATIONS", "VALEUR", "MONTANT"];
    const prestationText = ["PRESTATIONS", "NB JOUR", "MONTANT", "PRIX TOTAL"];

    // Define User
    let user = {};
    user.name = data.settings.author.name;
    user.settings = data.settings;
    const client = data.client;

    // DEFINE INFORMATIONS
    // ================================================

    let state;
    let docname;
    let number;
    let fullNumber;
    let createdString;

    if (data.names.bill) {
        state = "bill";
        title = "FACTURE";
        docname = `Facture n°${moment(data.date).format("YY")}-${data.names.bill}`;
        number = `N°${moment(data.date).format("YY")}-${data.names.bill}`;
        fullNumber = `F-${moment(data.date).format("YY")}-${data.names.bill}`;
    }
    else {
        state = "draft";
        title = "DEVIS";
        docname = `Devis n°${moment(data.date).format("YY")}-${data.names.devis}`;
        number = `N°${moment(data.date).format("YY")}-${data.names.devis}`;
        fullNumber = `D-${moment(data.date).format("YY")}-${data.names.devis}`;
    }

    // CALCULACTOR
    // ================================================

    const calcModifs = (total, amount, type) => {
      let value = 0;
      if (type == "%") {
        value = ((total / 100) * amount);
      }

      if (type == "-" || type == "+") {
        value = amount;
      }
      return value;
    }

    const showAsFloat = (value) => {
      return !isNaN(+value) ? (+value).toFixed(2) : value;
    }

    const calculator = (hasToCalculateModifs) => {
      let total = 0;
      if (data.prestations && data.prestations.length > 0) {
        data.prestations.map((obj)=>{
          total += obj.quantity * obj.amount;
        });
      }
      console.log(total);
      if (hasToCalculateModifs && data.reductions && data.reductions.length > 0) {
        data.reductions.map((obj)=>{
          obj.total = showAsFloat(calcModifs(total, obj.amount, obj.type));
          total -= calcModifs(total, obj.amount, obj.type);
          console.log("reduc amount", calcModifs(total, obj.amount, obj.type));
        });
      }
      console.log(total);
      if (hasToCalculateModifs && data.majorations && data.majorations.length > 0) {
        data.majorations.map((obj)=>{
          obj.total = showAsFloat(calcModifs(total, obj.amount, obj.type));
          total += calcModifs(total, obj.amount, obj.type);
        });
      }
      console.log(total);
      return total;
    }

    data.amount = showAsFloat(calculator(true));
    data.amountWithoutModifs = showAsFloat(calculator(false));

    // DOC PROPERTIES
    // ================================================

    doc.setProperties({
        title: title.toLowerCase(),
        subject: 'Ceci est un document légal généré par' + data.settings.author.name,
        author: data.settings.author.name,
        keywords: title.toLowerCase(),
        creator: data.settings.author.name
    });

    // HEADER
    // ================================================

    const drawHeader = (hasToDraw, posY) => {

      posY = 15;

      doc.setTextColor(200,200,200);
      doc.setFontSize(10);

      if (hasToDraw) {
        doc.myText(`CLIENT`, {align: "right"}, offsetX, posY);
        doc.myText(`PRESTATAIRE`, {align: "left"}, offsetX, posY);
      }

      doc.setTextColor(10,10,10);
      doc.setFontSize(16);

      posY += 8;

      if (hasToDraw) {
        doc.text(offsetX + 3, posY, user.name);
        doc.myText(`${client.name}`, {align: "right"},offsetX + 3,posY);
      }

      doc.setTextColor(190,190,190);
      doc.setFontSize(12);

      if (hasToDraw) {
        doc.borderLeft(offsetX, posY - 4, 22, 245);
        doc.text(offsetX + 3, posY + 6, user.settings.address);
        doc.text(offsetX + 3, posY + 12, `${user.settings.postalCode}, ${user.settings.city}`);
        doc.text(offsetX + 3, posY + 18, user.settings.id);

        doc.myText(`${client.address}`, {align: "right"}, offsetX + 3, posY + 6);
        doc.myText(`${client.zipcode}, ${client.city}`, {align: "right"}, offsetX + 3, posY + 12);
        if(client.type == 0) {
          doc.myText(`${client.commercialId}`, {align: "right"}, offsetX + 3, posY + 18);
          doc.borderLeft(totalX - offsetX, posY - 4, 23, 245);
        }
        else {
          doc.borderLeft(totalX - offsetX, posY - 4, 17, 245);
        }
      }

      posY = 57;

      doc.setTextColor(10,10,10);
      doc.setFont("Helvetica");
      doc.setFontSize(24);

      if (hasToDraw)
        doc.myText(`${title} ${number}`,{align: "left"},offsetX,posY + 5);

      doc.setText();
      doc.setTextColor(150,150,150);

      if (hasToDraw) {
        doc.myText(`${data.title}`,{align: "left"},offsetX,posY + 14);
      }

      doc.setFontSize(10);
      doc.setTextColor(190,190,190);

      if (hasToDraw) {
        doc.myText(`le ${moment(data.date).format("LL")} à ${data.settings.city}`,{align: "left"},offsetX,posY + 20);
      }


      posY = 97;
      return posY;
    }

    // Prestations
    // ================================================

    const drawPrestations = (prestations, hasToDraw, posY) => {
      if (prestations && prestations.length > 0)
      {

          doc.setFont("Helvetica");
          doc.setFontSize(10);
          doc.setTextColor(200,200,200);

          if (hasToDraw) {
            doc.text(offsetX, posY, prestationText[0]);
            doc.myText(prestationText[1], {align: "right"},90,posY);
            doc.myText(prestationText[2], {align: "right"},55,posY);
            doc.myText(prestationText[3], {align: "right"},offsetX,posY);
            doc.borderBottom(offsetX, posY + 3, 187, 215);
          }

          doc.resetText();
          doc.setFontSize(14);

          posY += 8;

        for(var i=0; i < prestations.length; i++) {
          posY += 4;
          if (hasToDraw) {
            doc.myText(`${prestations[i].quantity}`, {align: "right"},93,posY);
            doc.setTextColor(215,215,215);
            doc.myText(`x`, {align: "right"},90,posY);
            doc.setTextColor(0,0,0);
            doc.myText(`${prestations[i].amount}`, {align: "right"},60,posY);
            doc.setTextColor(215,215,215);
            doc.myText(`${currency}`, {align: "right"},55,posY);
            doc.setTextColor(0,0,0);
            doc.myText(`${prestations[i].quantity * prestations[i].amount}`, {align: "right"},offsetX + 5 ,posY);
            doc.setTextColor(215,215,215);
            doc.myText(`${currency}`, {align: "right"},offsetX,posY);
            doc.setTextColor(0,0,0);
          }
          let name;
          if (prestations[i].name.length > 40) {
            name = doc.splitTextToSize(prestations[i].name, 80, {});
            if (hasToDraw)
              doc.text(offsetX, posY, name);
            posY += 6 * name.length;
          }
          else {
            if (hasToDraw)
              doc.text(offsetX, posY, prestations[i].name);
            posY += 3;
          }

          if(prestations[i].description) {

            doc.setFontSize(12);
            doc.setTextColor(190,190,190);

            posY += 3;

            const description = doc.splitTextToSize(prestations[i].description, 80, {});
            if (hasToDraw)
              doc.text(offsetX, posY, description);

            doc.setFontSize(14);
            doc.setTextColor(10,10,10);

            posY += 5 * description.length;
          }

          if(hasToDraw) {
            if (i != prestations.length - 1)
              doc.borderBottom(offsetX, posY + 1, 187, 245);
            else
              doc.borderBottom(offsetX, posY + 1, 187, 215);
          }
          posY += 4;

        }
      }
      return posY;
    }

    // Majorations
    // ================================================

    const drawModifs = (data, text, hasToDraw, posY) => {

      if (data && data.length != 0) {

    		posY += 3;
        doc.setFont("Helvetica");
        doc.setFontSize(10);
        doc.setTextColor(200,200,200);

        if (hasToDraw) {
          doc.text(offsetX, posY, text[0]);
          doc.myText( text[1] ,{align: "right"}, 55, posY);
          doc.myText( text[2] ,{align: "right"},offsetX, posY);
          doc.borderBottom(offsetX, posY + 3, 187, 215);
        }

    		doc.resetText();
        doc.setFontSize(14);
    		posY += 10;

    		for(var i=0; i < data.length; i++)
    		{
          if (hasToDraw) {
            doc.text(offsetX,  posY, data[i].name);
            doc.myText( `${data[i].amount}` ,{align: "right"}, 60, posY);
            doc.setTextColor(215,215,215);

            if (data[i].type == "%")
              doc.myText(`${data[i].type}`, {align: "right"}, 55,posY);
            else
              doc.myText(`${currency}`, {align: "right"}, 55,posY);

            doc.setTextColor(0,0,0);
            doc.myText( `${data[i].total}` ,{align: "right"},offsetX + 5, posY);
            doc.setTextColor(215,215,215);
            doc.myText(`${currency}`, {align: "right"},offsetX,posY);
            doc.setTextColor(0,0,0);
            if (i != data.length - 1)
              doc.borderBottom(offsetX, posY + 3, 187, 245);
            else
              doc.borderBottom(offsetX, posY + 3, 187, 215);
          }
    			posY += 10;
    		}
    	}
      return posY;
    }


    // Total
    // ================================================

    const drawTotal = (hasToDraw, posY) => {
      posY += 15;

      doc.setFontSize(16);
      if (hasToDraw) {
        doc.setTextColor(180,180,180);
        doc.myText( `Total HT`,{align: "left"},offsetX, posY);
        doc.setTextColor(0,0,0);
        doc.borderBottom(offsetX + 22, posY, 80, 245);
        doc.myText( `${showAsFloat(data.amount)}`,{align: "right"},70, posY);
        doc.setTextColor(215,215,215);
        doc.myText(`${currency}`, {align: "right"},65,posY);
        doc.setTextColor(0,0,0);
      }
      posY += 8;
      if (hasToDraw) {
        doc.setTextColor(180,180,180);
        doc.myText( `Net à payer`,{align: "left"},offsetX, posY);
        doc.setTextColor(0,0,0);
        doc.myText( `${showAsFloat(data.amount)}`,{align: "right"},70, posY);
        doc.borderBottom(offsetX + 30, posY, 72, 245);
        doc.setTextColor(215,215,215);
        doc.myText(`${currency}`, {align: "right"},65,posY);
        doc.setTextColor(0,0,0);
      }
      return posY;
    }


    // Conditions de reglements
    // ================================================

    const drawConditions = (hasToDraw, posY) => {

      posY += 5;
      doc.setFontSize(12);

      if (state == "bill")
      {
          posY += 6;
          if (hasToDraw) {
            doc.setTextColor(180,180,180);
            doc.text(offsetX,  posY, "Date limite de règlement");
            doc.setTextColor(0,0,0);
            doc.text(120,  posY, moment(data.client.acceptedAt).add(user.settings.duration.bill, 'd').format('dddd D MMMM YYYY'));
            doc.borderBottom(60, posY, 55, 245);
          }
          posY += 6;
          if (hasToDraw) {
            doc.setTextColor(180,180,180);
            doc.text(offsetX ,  posY, "Taux de pénalité en l'absence de paiement");
            doc.setTextColor(0,0,0);
            doc.text(120,  posY, "11.5 %");
            doc.borderBottom(95, posY, 20, 245);
          }
          posY += 6;
          if (hasToDraw) {
            doc.setTextColor(180,180,180);
            doc.text(offsetX,  posY, "Conditions d'escompte");
            doc.setTextColor(0,0,0);
            doc.text(120,  posY, "Pas d'escompte");
            doc.borderBottom(58, posY, 58, 245);
          }
      }
      if (state == "draft")
      {
          posY += 6;
          if (hasToDraw) {
            doc.setTextColor(180,180,180);
            doc.text(offsetX,  posY, "Date limite de validité");
            doc.setTextColor(100,100,100);
            doc.text(120,  posY, moment(data.date).add(user.settings.duration.draft, 'd').format('dddd D MMMM YYYY'));
            doc.borderBottom(offsetX, posY, 100, 245);
          }
      }
      return posY;
    }


    // TVA and stuff
    // ================================================

    const drawTva = (hasToDraw, posY) => {
      posY += 10;
      doc.setFontSize(10);
      doc.setTextColor(180,180,180);
      if (hasToDraw)
        doc.text(offsetX,  posY, "Dispensé d'immatriculation au registre du commerce et des sociétés (RCS) et au répertoire des métiers. (IRM)");
      posY += 5;
      if (hasToDraw)
        doc.text( offsetX, posY,"TVA non applicable, art. 293b du CGI");
      return posY;
    }

    // PAGINATION
    // ================================================

    const setNewPage = () => {
  		doc.addPage();
  		posY = offsetX;
  		currentPage ++;
  		doc.setText();
      doc.setFontSize(12);
      doc.myText(`Page ${currentPage} / ${totalPages}`, {align: "right"},offsetX,paginationPosY);
      doc.resetText();
  	};

    // CGV
    // ================================================

    const drawCgv = (hasToDraw, posY) => {
      if (data.settings.cgv.enabled)
    	{
    		doc.setTextColor(100,100,100);
        if (hasToDraw)
          setNewPage();

        posY = offsetX * 1.5;

    		doc.setFontSize(24);

        if (hasToDraw)
    		  doc.text(offsetX, posY, "Condition générales de vente");
    		posY += 6;
        var index = 0;
        data.settings.cgv.list.map((obj) => {
          index++;
          doc.setFontSize(14);
          doc.setTextColor(100,100,100);
          posY += 8;
          if (hasToDraw) {
            doc.setTextColor(220,220,220);
            doc.text(offsetX + 5, posY, `${index}.`);
            doc.setTextColor(100,100,100);
            doc.text(offsetX + 10, posY, `${obj.title}`);
          }
          posY += 8;
          doc.setFontSize(10);
          doc.setTextColor(130,130,130);
          const content = doc.splitTextToSize(obj.content, 180, {});
          const height = 4 * content.length;
          if (hasToDraw) {
            doc.text(offsetX + 5, posY, content);
            doc.borderLeft(offsetX + 1, posY - 12, height + 7, 245);
          }
          posY += height;

        });
    	}
      return posY;
    }

    const headerSize = drawHeader(false, 0);
    const prestationSize = drawPrestations(data.prestations, false, 0);
    const reductionSize = drawModifs(data.reductions, increaseText, false, 0);
    const majorationSize = drawModifs(data.majorations, increaseText, false, 0);
    const totalSize = drawTotal(false, 0);
    const tvaSize = drawTva(false, 0);
    const cgvSize = drawCgv(false, 0);
    const conditionSize = drawConditions(false, 0);

    const finalSize = headerSize + prestationSize + reductionSize + majorationSize + totalSize + tvaSize + conditionSize;

    totalPages = finalSize / (totalY - offsetX);
    totalPages = Math.ceil(totalPages);
    if (data.settings.cgv.enabled)
      totalPages++;

    // set the first page pagination
    if (totalPages > 1 || data.settings.cgv.enabled)
    {
      doc.setText();
      doc.setFontSize(12);
      doc.myText(`Page ${currentPage} / ${totalPages}`, {align: "right"},offsetX,paginationPosY);
      doc.resetText();
    }

    posY = drawHeader(true, posY);

    posY = drawPrestations(data.prestations, true, posY);

    if (posY > paginationPosY - reductionSize)
      setNewPage();
    posY = drawModifs(data.reductions, decreaseText, true, posY);

    if (posY > paginationPosY - majorationSize)
		  setNewPage();
    posY = drawModifs(data.majorations, increaseText, true, posY);

    if (posY > paginationPosY - totalSize)
		  setNewPage();
    posY = drawTotal(true, posY);

    if (posY > paginationPosY - conditionSize)
		  setNewPage();
    posY = drawConditions(true, posY);

    if (posY > paginationPosY - tvaSize)
		  setNewPage();
    posY = drawTva(true, posY);

    posY = drawCgv(true, posY);

    // SAVING DOCUMENT
    // ================================================

    doc.save( `${docname}.pdf`);
};
