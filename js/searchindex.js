// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("gamelist.html", "gamelist", "Приветствуем вас!  Здесь вы найдете широкий выбор игр для всех возрастов и вкусов От захватывающих приключений до увлекательных головоломок - мы предлагаем разнообразие игр, чтобы каждый мог найти что-то по душе Погрузитесь в мир развлечений и откройте для себя новые игровые возможности прямо сейчас!   ", "");
   this[database_length++] = new SearchPage("action.html", "action", " ", "");
   this[database_length++] = new SearchPage("race.html", "action", " ", "");
   this[database_length++] = new SearchPage("RPG.html", "action", " ", "");
   this[database_length++] = new SearchPage("strategy.html", "action", " ", "");
   this[database_length++] = new SearchPage("horror.html", "action", " ", "");
   this[database_length++] = new SearchPage("casual.html", "action", " ", "");
   this[database_length++] = new SearchPage("simulator.html", "action", " ", "");
   this[database_length++] = new SearchPage("indi.html", "action", " ", "");
   this[database_length++] = new SearchPage("adventures.html", "adventure", " ", "");
   this[database_length++] = new SearchPage("index.html", "Безымянная страница", "Погрузитесь в мир развлечений и откройте для себя новые игровые возможности прямо сейчас!  Приветствуем вас  Включить версию для мобильных игр   ", "");
   this[database_length++] = new SearchPage("mobilever/indexmobile.html", "Безымянная страница", "Погрузитесь в мир развлечений и откройте для себя новые игровые возможности прямо сейчас!  Приветствуем вас  Включить версию для пк игр   ", "");
   this[database_length++] = new SearchPage("mobilever/rec.html", "Безымянная страница", " ", "");
   this[database_length++] = new SearchPage("mobilever/horror.html", "Безымянная страница", " ", "");
   this[database_length++] = new SearchPage("mobilever/sandbox.html", "Безымянная страница", " ", "");
   this[database_length++] = new SearchPage("mobilever/minecraft.html", "Безымянная страница", " ", "");
   return this;
}
