from reportlab.lib.units import inch
from datetime import date

def my_temp(c):
    c.translate(inch,inch)
    c.setFont("Helvetica",14)
    c.setStrokeColorRGB(0.1,0.8,0.1)
    c.setFillColorRGB(0,0,1)
    c.drawImage("C:\\Users\\lenovo\\Pictures\\Saved Pictures\\icon\\icon1.png",-0.8*inch,9.3*inch)
    c.drawString(0,9*inch,"Shop No:1234,ABCD Road")
    c.drawString(0,8.7*inch,"City Name:Mycity,ZIP:12345")
    c.setFillColorRGB(0,0,0)
    c.line(0,8.6*inch,6.8*inch,8.6*inch)
    c.drawString(5.6*inch,9.5*inch,'Bill No : #1234')
    dt = date.today().strftime('%d-%b-%Y')
    c.drawString(5.6*inch,9.3*inch,dt)
    c.setFont("Helvetica",8)
    c.drawString(3*inch,9.6*inch,'Tax No : #ABC1234')
    c.setFillColorRGB(1,0,0)
    c.setFont("Times-Bold",40)
    c.drawString(4.3*inch,8.7*inch,'INVOICE')
    c.rotate(45)
    c.setFillColorCMYK(0,0,0,0.08)
    c.setFont("Helvetica",70)
    c.drawString(2*inch,1*inch,'COMPUCLINIC')
    c.rotate(-45)
    c.setFillColorRGB(0,0,0)
    c.setFont("Times-Roman",22)
    c.drawString(0.5*inch,8.3*inch,'Products')
    c.drawString(4*inch,8.3*inch,'Price')
    c.drawString(5*inch,8.3*inch,'Quantity')
    c.drawString(6.1*inch,8.3*inch,'Total')
    c.setStrokeColorCMYK(0,0,0,1)
    c.line(3.9*inch,8.3*inch,3.9*inch,2.7*inch)
    c.line(4.9*inch,8.3*inch,4.9*inch,2.7*inch) 
    c.line(6.1*inch,8.3*inch,6.1*inch,2.7*inch)
    c.line(0.01*inch,2.5*inch,7*inch,2.5*inch)

    c.drawString(1*inch,1.8*inch,'Discounts')
    c.drawString(1*inch,1.2*inch,'Tax')
    c.setFont("Times-Bold",22)
    c.drawString(5.6*inch,-0.1*inch,'Signature')
    c.setStrokeColorRGB(0.1,0.8,0.1)
    c.line(0,-0.7*inch,6.8*inch,-0.7*inch)
    c.setFont("Helvetica",8)
    c.setFillColorRGB(1,0,0)
    c.drawString(0,-0.9*inch,u'compuclinic')

    return c


