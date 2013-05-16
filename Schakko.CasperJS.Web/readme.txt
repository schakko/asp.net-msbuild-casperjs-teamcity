Um die Intranetvorlage verwenden zu können, müssen Sie die 
Windows-Authentifizierung aktivieren und die anonyme Authentifizierung 
deaktivieren.

Detaillierte Anweisungen (einschließlich Anweisungen für IIS 6.0) finden Sie 
unter http://go.microsoft.com/fwlink/?LinkID=213745.

IIS 7
1. Öffnen Sie den IIS-Manager, und navigieren Sie zu Ihrer Website.
2. Doppelklicken Sie in der Ansicht "Features" auf "Authentifizierung".
3. Wählen Sie auf der Seite "Authentifizierung" die Option 
   "Windows-Authentifizierung" aus. Wird die Windows-Authentifizierung nicht 
   als Option angeboten, müssen Sie sicherstellen, dass die 
   Windows-Authentifizierung auf dem Server installiert ist.
        So aktivieren Sie die Windows-Authentifizierung:
 a) Rufen Sie in der Systemsteuerung die Option "Programme und Funktionen" auf.
 b) Wählen Sie "Windows-Funktionen ein- oder ausschalten".
 c) Navigieren Sie zu "Internetinformationsdienste" | "WWW-Dienste" | 
    "Sicherheit", und stellen Sie sicher, dass der Knoten 
    "Windows-Authentifizierung" aktiviert ist.
4. Klicken Sie im Bereich "Aktionen" auf "Aktivieren", um die 
   Windows-Authentifizierung zu aktivieren.
5. Wählen Sie auf der Seite "Authentifizierung" die Option "Anonyme 
   Authentifizierung" aus.
6. Klicken Sie im Bereich "Aktionen" auf "Deaktivieren", um die anonyme 
   Authentifizierung zu deaktivieren.

IIS Express
1. Klicken Sie in Visual Studio mit der rechten Maustaste auf das Projekt, und 
   wählen Sie "IIS Express verwenden" aus.
2. Klicken Sie im Projektmappen-Explorer auf das Projekt, um es auszuwählen.
3. Öffnen Sie den Bereich "Eigenschaften" (F4), sofern dieser nicht bereits 
   geöffnet ist.
4. Nehmen Sie im Bereich "Eigenschaften" des Projekts die folgenden 
   Einstellungen vor:
 a) Legen Sie für "Anonyme Authentifizierung" die Option "Deaktiviert" fest.
 b) Legen Sie für "Windows-Authentifizierung" die Option "Aktiviert" fest.

Mit dem Webplattform-Installer können Sie IIS Express installieren:
    Für Visual Studio: http://go.microsoft.com/fwlink/?LinkID=214802
    Für Visual Web Developer: http://go.microsoft.com/fwlink/?LinkID=214800
