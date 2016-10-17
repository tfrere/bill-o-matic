import jsPDF				from 'jspdf';


(function(API){
    API.myText = function(txt, options, x, y) {

        options = options || {};

        if( options.align == "center" && txt){
            // Get current font size
            var fontSize = this.internal.getFontSize();

            // Get page width
            var pageWidth = this.internal.pageSize.width;

            var txtWidth = this.getStringUnitWidth(txt)*fontSize/this.internal.scaleFactor;

            // Calculate text's x coordinate
            x = ( pageWidth - txtWidth ) / 2;
        }
        if ( options.align == "right" && txt) {
            // Get current font size
            var fontSize = this.internal.getFontSize();

            // Get page width
            var pageWidth = this.internal.pageSize.width;

            var txtWidth = this.getStringUnitWidth(txt)*fontSize/this.internal.scaleFactor;

            // Calculate text's x coordinate
        	x = (typeof x != "undefined" ? (( pageWidth - txtWidth ) - x) : ( pageWidth - txtWidth ) );
        }
        if ( options.align == "left" && txt) {
        }
        // Draw text at x,y
        this.text(txt,x,y);
    };

	API.setRoundedRectangle = function(posX, posY, width, height, radius, greyScale) {

		this.setDrawColor(0);
		this.setFillColor(greyScale,greyScale,greyScale);

		this.rect(posX - radius, posY, width, height - radius * 2, 'F');
		this.rect(posX, posY - radius, width - radius * 2, height, 'F');
		this.circle(posX, posY, radius, 'F'); // topleft
		this.circle(posX + width - radius * 2, posY, radius, 'F'); // topright
		this.circle(posX, posY + height  - radius * 2, radius, 'F'); // bottomleft
		this.circle(posX + width  - radius * 2, posY + height  - radius * 2, radius, 'F'); // bottomright

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
		this.setFontType("italic");
	};

	API.setBold = function() {
		this.setFontType("bold");
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

	API.setNewPage = function() {
		this.addPage();
		posY = 15;
		currentPage ++;
		this.setFontSize(10);
		setText();
		this.text(paginationPosX, paginationPosY, "Page " + currentPage + " / " + totalPages);
		resetText();
	};
})(jsPDF.API);
