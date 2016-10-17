import jsPDF				from 'jspdf';
import moment				from 'moment';


(function(API){
    API.myText = function(txt, options, x, y) {
        options = options || {};

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
		this.setFillColor(250,250,250);
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

	API.setItalic = function() {
		doc.setFont("Helvetica", "italic");
	};

	API.setBold = function() {
		doc.setFont("Helvetica", "bold");
	};


	API.resetText = function() {
		this.setFontSize(16);
		this.setTextColor(0,0,0);
		this.setFont("Helvetica");
	};

	API.borderBottom = function(x, y, width, height, alpha) {
		this.setDrawColor(0);
		if (alpha == "dark")
			this.setFillColor(220,220,220);
		else
			this.setFillColor(alpha,alpha,alpha);
		this.rect(x, y, width, height, 'F');
	};

})(jsPDF.API);


export default function generatePdf(data) {

	var doc = new jsPDF();
	var date = moment();
	doc.resetText();

	var totalY = 297; // portrait A4
	var headerSize = 30;
	var footerSize = 55;
	var currentPage = 1;
	var totalPages = 0;
	var cgvContent, isCgv, title, posY;
	var paginationPosX = 178;
	var paginationPosY = 290;
	var currency = " €";

	// Define User
	var user = {};
	user.name = data.settings.author.name;
	user.settings = data.settings;
	var client = data.client;

	var setNewPage = function() {
		doc.addPage();
		posY = 15;
		currentPage ++;
		doc.setText();
		doc.text(paginationPosX, paginationPosY, "Page " + currentPage + " / " + totalPages);
		doc.resetText();
	};

	// DEFINE INFORMATIONS
	// ================================================

		var state, docname, title = "";
		var number;

		if (data.names.bill) {
			state = "bill";
			title = "FACTURE";
			docname = "Facture n°";
			number = data.names.bill;
		}
		else {
			state = "draft";
			title = "DEVIS";
			docname = "Devis n°";
			number = data.names.devis;
		}

	// DOC PROPERTIES
	// ================================================

		doc.setProperties({
			title: 'Devis',
			subject: 'Ceci est un document légal généré par Thibaud FRERE.',
			author: "Thibaud FRERE",
			keywords: 'devis, facture',
			creator: 'Thibaud FRERE'
		});

	// PAGINATION
	// ================================================

		// Calculate the total number of pages for pagination
		totalPages = (headerSize + (data.prestations.length * 10 + 40) +
				  (data.prestations.length * 10 + 40) + footerSize) / 297;
		totalPages = Math.round(totalPages);

		if(user.settings.cgv.enabled)
		{
			cgvContent = user.settings.cgv.content;
			isCgv = true;
			totalPages++;
		}
		// and set the first page pagination
		if (totalPages > 1)
		{
			doc.resetText();
			doc.setSmallText();
			doc.text(paginationPosX, paginationPosY, "Page " + currentPage + " / " + totalPages);
			doc.resetText();
		}

	// HEADER
	// ================================================

		doc.setGreyRect(-10, 5, 310, headerSize);
		posY = 15;
		doc.setTextColor(100,100,100);

		// USER & CLIENT
		
		doc.setTextColor(10,10,10);
		doc.setFont("Times");
		doc.setFontSize(16);

		doc.text(12, posY, user.name);

		doc.myText(client.name + "", {align: "right"},15,posY);

		doc.setTextColor(100,100,100);
		doc.setFont("Helvetica");
		doc.setFontSize(14);

		doc.text(12, posY + 7, user.settings.address);
		doc.text(12, posY + 14, user.settings.postalCode + " " + user.settings.city);
		doc.text(12, posY + 21, user.settings.id);

		doc.myText(client.address + "", {align: "right"}, 15, posY + 7);
		doc.myText(client.zipcode + " " + client.city + "", {align: "right"}, 15, posY + 14);
		if(client.type == 0)
			doc.myText(client.commercialId + "", {align: "right"}, 15, posY + 21);


	// TITLE
	// ================================================

		posY = 60;

		doc.setTextColor(10,10,10);
		doc.setFont("Helvetica");
		doc.setFontSize(24);

		doc.myText(title + "",{align: "center"},80,posY);

		doc.setFontSize(16);
		doc.setTextColor(180,180,180);

		doc.myText(moment(data.date).format("L") + "    " + number,{align: "center"},80,posY + 10);

		doc.setTextColor(10,10,10);


	// Prestations
	// ================================================

	doc.resetText();
	doc.setText();
	posY = headerSize + 70;

	doc.setFont("Helvetica");
	doc.text(15, posY, "Prestation");
	doc.myText("Quantité",{align: "right"},90,posY);
	doc.myText("Montant",{align: "right"},55,posY);
	doc.myText("Prix total",{align: "right"},15,posY);

	doc.setFontSize(16);

	doc.borderBottom(15, posY + 3, 180, 0.3, 245);

	doc.resetText();

	posY += 15;

	if (data.prestations)
	{
		for(var i=0; i < data.prestations.length; i++)
		{
			if (posY > totalY - footerSize)
				setNewPage();

			doc.myText(data.prestations[i].quantity + "",{align: "right"},90,posY);
			doc.myText(data.prestations[i].amount + currency,{align: "right"},55,posY);
			doc.myText(data.prestations[i].quantity * data.prestations[i].amount + currency,{align: "right"},15,posY);
			doc.text(15, posY, data.prestations[i].name);

			if(data.prestations[i].description)
			{
				posY += 10;

				doc.setFontSize(12);
				doc.setTextColor(180,180,180);

				var presta = doc.splitTextToSize(data.prestations[i].description, 90, {});
				doc.text(15, posY, presta);

				doc.setFontSize(16);
				doc.setTextColor(10,10,10);

				posY += 4 * presta.length;
			}
			else 
				posY += 5;

			doc.borderBottom(15, posY + 3, 180, 0.3, 245);
			posY += 15;
		}

	}


	// Majorations
	// ================================================

	if (data.majorations && data.majorations.length != 0)
	{
		posY += 20;

		if (posY > totalY - footerSize)
			setNewPage();

		doc.resetText();
		doc.setText();

		doc.text(100, posY, "Majorations");
		doc.text(175, posY, "Montant");

		doc.borderBottom(100, posY + 3, 95, 0.3, 245);

		doc.resetText();

		posY += 15;

		for(i=0; i < data.majorations.length; i++)
		{
			if (posY > totalY - footerSize)
				setNewPage();

			if (i % 2  == 1 && data.prestations.length > 1)
				doc.setGreyRect(100, posY - 7, 150, 10);

			doc.text(100,  posY, data.majorations[i].name);
			doc.myText( data.majorations[i].amount + " " + data.majorations[i].type ,{align: "right"},15, posY);

			posY += 10;
		}
	}

	// Reductions
	// ================================================

	if (data.reductions && data.reductions.length != 0)
	{
		posY += 20;

		if (posY > totalY - footerSize)
			setNewPage();

		doc.resetText();
		doc.setText();

		doc.text(100, posY, "Réduction");
		doc.text(175, posY, "Montant");

		doc.borderBottom(100, posY + 3, 95, 0.3, 245);

		doc.resetText();

		posY += 15;

		for(i=0; i < data.reductions.length; i++)
		{
			if (posY > totalY - footerSize)
				setNewPage();

			if (i % 2  == 1 && data.prestations.length > 1)
			{
				doc.setDrawColor(0);
				doc.setFillColor(250,250,250);
				doc.rect(100, posY - 7, 150, 10, 'F');
			}

			doc.text(100,  posY, data.reductions[i].name);
			doc.myText( data.reductions[i].amount + " " + data.reductions[i].type ,{align: "right"},15, posY);

			posY += 10;
		}
	}

	// FOOTER
	// ================================================

	posY += 10;

	if (posY > totalY - footerSize + 30)
		setNewPage();

	doc.setFontSize(12);
	doc.setTextColor(100,100,100);

		// Conditions de reglements
		// ================================================

		if (state == "bill")
		{
			posY += 25;
			doc.text(15,  posY + 6, "Date limite de règlement");
			doc.text(120,  posY + 6, moment(data.client.acceptedAt).add(user.settings.duration.bill, 'd').format('dddd D MMMM YYYY')) + "";
			doc.borderBottom(15, posY + 8, 100, 0.3, 245);
			doc.text(15,  posY + 13, "Taux de pénalité en l'absence de paiement");
			doc.text(120,  posY + 13, "11.5 %");
			doc.borderBottom(15, posY + 15, 100, 0.3, 245);
			doc.text(15,  posY + 19, "Conditions d'escompte");
			doc.text(120,  posY + 19, "Pas d'escompte");
			doc.borderBottom(15, posY + 21, 100, 0.3, 245);
			posY = posY - 25;
		}

		if (state == "draft")
		{
			posY += 25;
			doc.text(15,  posY + 6, "Date limite de validité");
			doc.text(120,  posY + 6, moment(data.date).add(user.settings.duration.draft, 'd').format('dddd D MMMM YYYY')) + "";
			doc.borderBottom(15, posY + 8, 100, 0.3, 245);
			posY -= 25;
		}

		// Total
		// ================================================

		doc.setFontSize(14);
		doc.myText( "Total HT  " + data.amount + " €",{align: "right"},30, posY);
		doc.borderBottom(150, posY + 3, 30, 0.3, 245);
		posY += 10;
		doc.myText( "Net à payer  " + data.amount + " €",{align: "right"},30, posY);

		// TVA and stuff
		// ================================================

		posY += 50;
		doc.setFontSize(10);
		doc.setTextColor(170,170,170);
		doc.text(15,  posY, "Dispensé d'immatriculation au registre du commerce et des sociétés (RCS) et au répertoire des métiers. (IRM)");
		posY += 10;
		doc.text( 15, posY,"TVA non applicable, art. 293b du CGI");

	// CGV
	// ================================================

	if (isCgv)
	{
		doc.setTextColor(100,100,100);
		setNewPage();

		doc.setFontSize(24);
		posY += 5;
		doc.text(15, posY, "Condition générales de vente");
		posY += 15;

		doc.setFontSize(14);
		doc.setTextColor(150,150,150);
		var array = doc.splitTextToSize(cgvContent, 160, {});
		doc.text(15, posY, array);


	}

	// SAVING DOCUMENT
	// ================================================

	doc.save( docname +  "" + number.substring(1, number.length) + '.pdf');

};
