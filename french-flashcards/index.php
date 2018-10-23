<?php include('header.php'); ?>

<?php
$words = array("le"=>"the(m)", "je"=>"I", "de"=>"of", "est"=>"is", "pas"=>"not","vous"=>"you (plural)","la"=>"the(f)","tu"=>"you",
 "que"=>"that","un"=>"a","il"=>"he, it","et"=>"and","à"=>"in, to, at","a"=>"has","ne"=>"only","les"=>"the (plural)","en"=>"in, to",
 "ça"=>"this, that","une"=>"a (f)","J'ai"=>"I have","pour"=>"for","des"=>"from, of the","ce"=>"this","sur"=>"on, upon, about",
 "qui"=>"who","nous"=>"we, us","y"=>"there","mais"=>"but","me"=>"me, myself","plus"=>"more","plus"=>"more","non"=>"not","mon"=>"my",
 "suis"=>"am","dans"=>"in","du"=>"from, of","bien"=>"well","elle"=>"she","si"=>"if","tout"=>"all","Je suis"=>"I am","Pouvoir"=>"can,
  to be able to","par"=>"by","avec"=>"with","va"=>"will","toi"=>"you","Il va"=>"he goes, he is going","oui"=>"yes","il fait"=>"he does, he makes",
  "il fait"=>"he does, he makes","ils"=>"they","il a"=>"he has","être"=>"to be","faire"=>"to do, to make","comme"=>"as","quoi"=>"what",
  "ici"=>"here","Je sais"=>"I know","Je veux"=>"I want","là"=>"there","au"=>"to","rien"=>"nothing","ici"=>"here","veux"=>"want","ma"=>"my",
  "où"=>"where",""=>"","pourquoi"=>"why","quand"=>"when","Je vais"=>"I go, I am going","Je peux"=>"I can","dire"=>"to say","alors"=>"then",
  "autre"=>"other","nouveau"=>"new","aller"=>"to go","temps"=>"time","savoir"=>"to know","voir"=>"to see","sans"=>"without","jour"=>"day",
  "an"=>"year","monde"=>"world","après"=>"after","personne"=>"person","venir"=>"to come","peu"=>"little","semaine"=>"week","son"=>"its",
  "ton"=>"your","seconde"=>"second","seconde"=>"second","heure"=>"hour","minute"=>"minute","comment"=>"how","avez"=>"have","bon"=>"good",
  "ou"=>"or","très"=>"very","merci"=>"thank you","même"=>"same","jamais"=>"never","aussi"=>"also","tous"=>"all");

?>
<div class="container-fluid">

  <div id="intro-container">
    <h1 id="intro-header">Learn 100 Common French Words</h1>
    <p id="intro-text">Read the word in French and try to remember/guess its meaning, then click on the word. If you were correct, check the "Got It" box. If not, move on to the next word, this word will shuffle back into the pile.</p>
</div>

<div id="start-the-cards">
<button type="button" class="btn btn-primary" onclick="startCards()">Start Flashcards</button>
</div>
<div class="btn-group">
<span id="card-prev"></span>
<span id="card-next"></span>
</div>
<div id="completion">
  <h3>You completed all the cards!<h3>
  <h4>Click the 'Start Over' button to do it all again.</h4>
</div>
  <div id="accordion">
    <div class="card" onclick="displayRemoveButton()">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">

          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

            <div id="card-top">
            French word
          </div>
          </button>
        </h5>
      </div>

      <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <div  id="card-bottom">
          English word
        </div>
      </div>
    </div>
  </div>
</div>
  <div id="card-remove">
</div>

</div>
<?php include('footer.php'); ?>
