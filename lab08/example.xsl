<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Example</title>
        <meta charset="UTF-8"/>
        <link rel="stylesheet" href="styles.css"/>
      <title>Faktura</title>
      </head>
      <body>
        <div class="invoice-container">

            <div class="text-field">

                <div id="day" class="date-field-day date-field"> 
                  <xsl:value-of select="substring-before(Data/Date, '-')"/>
                </div>
                <div id="month" class="date-field-month date-field"> 
                  <xsl:value-of select="substring-before(substring-after(Data/Date, '-'), '-')"/>
                </div>

                <div id="year" class="date-field-year date-field"> 
  <xsl:value-of select="substring(substring-after(substring-after(Data/Date, '-'), '-'), string-length(substring-after(substring-after(Data/Date, '-'), '-')) - 1)"/>
</div>


            </div>

            <div class="text-field invoice-number-field">FV/2024/001</div>
            <div class="text-field buyer-name-field"><xsl:value-of select="Data/Buyer/Name"/></div>
            
            <div class="city-field text-field">Warszawa</div>
            <div class="buyer-adress-field text-field"><xsl:value-of select="Data/Buyer/Address"/></div>


            <div class="text-field service-date">03.12.2024</div>

            <div class="text-field payment-option">
                przelew
            </div>
            <div class="text-field payment-date">
                09.12.2024
            </div>

            <div class="text-field bank">
                mBank
            </div>

            <div class="text-field accountNumber">
                123145213412412
            </div>

            <xsl:for-each select="Data/Services/Service">

              <!-- zmienne -->
              <xsl:variable name="CenaJednostkowa" select="number(CenaJednostkowa)"/>
              <xsl:variable name="Amount" select="number(Amount)"/>
              <xsl:variable name="Sp" select="number(Sp)"/>
              <xsl:variable name="PPZ" select="PPZ"/>




              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 55px;">
                <xsl:value-of select="Lp"/>
              </div>
              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 75px;">
                <xsl:value-of select="Name"/>
              </div>
              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 260px;">
                <xsl:value-of select="PPZ"/>
              </div>
              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 325px;">
                <xsl:value-of select="Miara"/>
              </div>
              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 370px;">
                <xsl:value-of select="Amount"/>
              </div>
              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 410px;">
                <xsl:value-of select="substring-before(CenaJednostkowa, '.')"/>
              </div>
              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 460px;">
                <xsl:value-of select="substring-after(CenaJednostkowa, '.')"/>
              </div>

              <!-- wartosc bez podatku zl-->
              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 500px;">
              <xsl:choose>
                <xsl:when test="contains(string(CenaJednostkowa * Amount), '.')">
                  <xsl:value-of select="substring-before(string(CenaJednostkowa * Amount), '.')"/>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="CenaJednostkowa * Amount"/>
                </xsl:otherwise>
              </xsl:choose>
            </div>

        
              <!-- wartosc bez podatku gr-->

              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 540px;">
                <xsl:value-of select="substring-after(format-number(CenaJednostkowa * Amount, '0.00'), '.')"/>
              </div>


               <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 574px;">
                <xsl:value-of select="Sp"/>
              </div>
              <!-- kwota podatku -->

              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 610px;">
                <xsl:choose>
                  <xsl:when test="PPZ = 'TAK'">
                    0
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="substring-before(format-number(CenaJednostkowa * Amount * Sp div 100, '0.00'), '.')"/>
                  </xsl:otherwise>
                </xsl:choose>
              </div>
              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 655px;">
                <xsl:choose>
                  <xsl:when test="PPZ = 'TAK'">
                    0
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="substring-after(format-number(CenaJednostkowa * Amount * Sp div 100, '0.00'), '.')"/>
                  </xsl:otherwise>
                </xsl:choose>
              </div>


              <!--wartosc towaru z podatkiem-->

              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 700px;">
                <xsl:choose>
                <xsl:when test="PPZ = 'NIE'">
                <xsl:value-of select=" substring-before(format-number(CenaJednostkowa*Amount + CenaJednostkowa * Amount * Sp div 100, '0.00'), '.')"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="substring-before(format-number(CenaJednostkowa * Amount, '0.00'), '.')"/>
                </xsl:otherwise>
                </xsl:choose>
              </div>

              <div class="service text-field" style="top: {235 + (position() - 1) * 22}px; left: 745px;">
              <xsl:choose>
                <xsl:when test="PPZ = 'NIE'">
                  <xsl:value-of select=" substring-after(format-number(CenaJednostkowa*Amount + CenaJednostkowa * Amount * Sp div 100, '0.00'), '.')"/>
                </xsl:when>
              <xsl:otherwise>
                    <xsl:value-of select="substring-after(format-number(CenaJednostkowa * Amount, '0.00'), '.')"/>
              </xsl:otherwise>

              </xsl:choose>

              </div>

              
            </xsl:for-each>


            <!-- sumowanie-->

            <xsl:variable name="total" select="0"/>
            <xsl:call-template name="calculate-total">
                <xsl:with-param name="services" select="Data/Services/Service"/>
                <xsl:with-param name="total" select="0"/>
            </xsl:call-template>
            <div class="text-field seller-adress-field">Noworoursynowska 161C</div>
            <div class="seller-nip-field text-field">1231231</div>
            <div class="text-field seller-name-field">Adrian Nowak</div>


            <div class="buyer-nip-field text-field">778731</div>
            <div class="signature">Bartosz Papiński</div>

        </div>
    </body>
    </html>
  </xsl:template>

  <!-- funkcaj sumująca amount-->

  <xsl:template name="calculate-total">
      <xsl:param name="services"/>
      <xsl:param name="total"/>

      <xsl:choose>
          <xsl:when test="count($services) = 0">
              <!-- Koniec rekurencji - wyświetl sumę -->
              <div class="text-field final-sum-zl"><xsl:value-of select="substring-before($total, '.')"/></div>  
              <div class="text-field final-sum-gr"><xsl:value-of select="substring-after(string($total), '.')"/></div>  
          </xsl:when>
          <xsl:otherwise>
              <!-- Pobierz pierwszy węzeł i jego wartość Amount -->
              <xsl:variable name="first" select="$services[1]"/>
              <xsl:variable name="amount" select="number($first/Amount)"/>
              <xsl:variable name="cena" select="number($first/CenaJednostkowa)"/>
              <xsl:variable name="stawka" select="number($first/Sp)"/>
              <xsl:variable name="zwolniony" select="$first/PPZ"/>


              
              <xsl:choose>  
                <xsl:when test="$zwolniony='TAK'">
                  <xsl:call-template name="calculate-total">
                      <xsl:with-param name="services" select="$services[position() > 1]"/>
                      <!-- sumowanie wszystkiego bez podatku-->
                      <xsl:with-param name="total" select="$total + format-number(($amount * $cena), '0.00' )"/>
                  </xsl:call-template>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:call-template name="calculate-total">
                      <xsl:with-param name="services" select="$services[position() > 1]"/>
                      <!-- sumowanie wszystkiego z uwzglednieniem podatku-->
                      <xsl:with-param name="total" select="$total + format-number((1+$stawka div 100)*($amount * $cena), '0.00' )"/>
                  </xsl:call-template>
                </xsl:otherwise>
              </xsl:choose>

              <!-- Wywołaj szablon rekurencyjnie z pozostałymi węzłami -->
              

          </xsl:otherwise>
      </xsl:choose>
  </xsl:template>


</xsl:stylesheet>
