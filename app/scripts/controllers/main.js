'use strict';

/**
 * @ngdoc function
 * @name typetestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the typetestApp
 */
angular.module('typetestApp')
  .controller('MainCtrl', function ($scope, $document, $timeout) {

    var shuffle = function(array) {
      let counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }

      return array;
    }

    var words = ['the','of','and','to','a','in','for','is','on','that','by','this','with','i','you','it','not','or','be','are','from','at','as','your','all','have','new','more','an','was','we','will','home','can','us','about','if','page','my','has','search','free','but','our','one','other','do','no','information','time','they','site','he','up','may','what','which','their','news','out','use','any','there','see','only','so','his','when','contact','here','business','who','web','also','now','help','get','pm','view','online','c','e','first','am','been','would','how','were','me','s','services','some','these','click','its','like','service','x','than','find','price','date','back','top','people','had','list','name','just','over','state','year','day','into','email','two','health','n','world','re','next','used','go','b','work','last','most','products','music','buy','data','make','them','should','product','system','post','her','city','t','add','policy','number','such','please','available','copyright','support','message','after','best','software','then','jan','good','video','well','d','where','info','rights','public','books','high','school','through','m','each','links','she','review','years','order','very','privacy','book','items','company','r','read','group','sex','need','many','user','said','de','does','set','under','general','research','university','january','mail','full','map','reviews','program','life','know','games','way','days','management','p','part','could','great','united','hotel','real','f','item','international','center','ebay','must','store','travel','comments','made','development','report','off','member','details','line','terms','before','hotels','did','send','right','type','because','local','those','using','results','office','education','national','car','design','take','posted','internet','address','community','within','states','area','want','phone','dvd','shipping','reserved','subject','between','forum','family','l','long','based','w','code','show','o','even','black','check','special','prices','website','index','being','women','much','sign','file','link','open','today','technology','south','case','project','same','pages','uk','version','section','own','found','sports','house','related','security','both','g','county','american','photo','game','members','power','while','care','network','down','computer','systems','three','total','place','end','following','download','h','him','without','per','access','think','north','resources','current','posts','big','media','law','control','water','history','pictures','size','art','personal','since','including','guide','shop','directory','board','location','change','white','text','small','rating','rate','government','children','during','usa','return','students','v','shopping','account','times','sites','level','digital','profile','previous','form','events','love','old','john','main','call','hours','image','department','title','description','non','k','y','insurance','another','why','shall','property','class','cd','still','money','quality','every','listing','content','country','private','little','visit','save','tools','low','reply','customer','december','compare','movies','include','college','value','article','york','man','card','jobs','provide','j','food','source','author','different','press','u','learn','sale','around','print','course','job','canada','process','teen','room','stock','training','too','credit','point','join','science','men','categories','advanced','west','sales','look','english','left','team','estate','box','conditions','select','windows','photos','gay','thread','week','category','note','live','large','gallery','table','register','however','june','october','november','market','library','really','action','start','series','model','features','air','industry','plan','human','provided','tv','yes','required','second','hot','accessories','cost','movie','forums','march','la','september','better','say','questions','july','yahoo','going','medical','test','friend','come','dec','server','pc','study','application','cart','staff','articles','san','feedback','again','play','looking','issues','april','never','users','complete','street','topic','comment','financial','things','working','against','standard','tax','person','below','mobile','less','got','blog','party','payment','equipment','login','student','let','programs','offers','legal','above','recent','park','stores','side','act','problem','red','give','memory','performance','social','q','august','quote','language','story','sell','options','experience','rates','create','key','body','young','america','important','field','few','east','paper','single','ii','age','activities','club','example','girls','additional','password','z','latest','something','road','gift','question','changes','night','ca','hard','texas','oct','pay','four','poker','status','browse','issue','range','building','seller','court','february','always','result','audio','light','write','war','nov','offer','blue','groups','al','easy','given','files','event','release','analysis','request','fax','china','making','picture','needs','possible','might','professional','yet','month','major','star','areas','future','space','committee','hand','sun','cards','problems','london','washington','meeting','rss','become','interest','id','child','keep','enter','california','porn','share','similar','garden','schools','million','added','reference','companies','listed','baby','learning','energy','run','delivery','net','popular','term','film','stories','put','computers','journal','reports','co','try','welcome','central','images','president','notice','god','original','head','radio','until','cell','color','self','council','away','includes','track','australia','discussion','archive','once','others','entertainment','agreement','format','least','society','months','log','safety','friends','sure','faq','trade','edition','cars','messages','marketing','tell','further','updated','association','able','having','provides','david','fun','already','green','studies','close','common','drive','specific','several','gold','feb','living','sep','collection','called','short','arts','lot','ask','display','limited','powered','solutions','means','director','daily','beach','past','natural','whether','due','et','electronics','five','upon','period','planning','database','says','official','weather','mar','land','average','done','technical','window','france','pro','region','island','record','direct','microsoft','conference','environment','records','st','district','calendar','costs','style','url','front','statement','update','parts','aug','ever','downloads','early','miles','sound','resource','present','applications','either','ago','document','word','works','material','bill','apr','written','talk','federal','hosting','rules','final','adult','tickets','thing','centre','requirements','via','cheap','nude','kids','finance','true','minutes','else','mark','third','rock','gifts','europe','reading','topics','bad','individual','tips','plus','auto','cover','usually','edit','together','videos','percent','fast','function','fact','unit','getting','global','tech','meet','far','economic','en','player','projects','lyrics','often','subscribe','submit','germany','amount','watch','included','feel','though','bank','risk','thanks','everything','deals','various','words','linux','jul','production','commercial','james','weight','town','heart','advertising','received','choose','treatment','newsletter','archives','points','knowledge','magazine','error','camera','jun','girl','currently','construction','toys','registered','clear','golf','receive','domain','methods','chapter','makes','protection','policies','loan','wide','beauty','manager','india','position','taken','sort','listings','models','michael','known','half','cases','step','engineering','florida','simple','quick','none','wireless','license','paul','friday','lake','whole','annual','published','later','basic','sony','shows','corporate','google','church','method','purchase','customers','active','response','practice','hardware','figure','materials','fire','holiday','chat','enough','designed','along','among','death','writing','speed','html','countries','loss','face','brand','discount','higher','effects','created','remember','standards','oil','bit','yellow','politicalx','increase','advertise','kingdom','base','near','environmental','thought','stuff','french','storage','oh','japan','doing','loans','shoes','entry']
    var initWords = function(){
      $scope.wordIndex = 0;
      $scope.charIndex = 0;
      $scope.currentWord = "";

      $scope.words = shuffle(words).slice(0, 60);
      $scope.words = $scope.words.map(function(word){ return word + " "})
      $scope.typedWords = [];

      $scope.timeElapsed = 0;
      $scope.startedAt = null;

      $scope.measuredWPM = 0;
    }
    $scope.testLengthMs = 30 * 1000;

    initWords();

/*
    Object.defineProperty($scope,  'timeElapsed', {
      get: function(){
        if ($scope.startedAt){
          return new Date().getTime() - $scope.startedAt.getTime()
          //return 1
        } else {
          return 0
        }
      }});
    */

    var tick = function(){
      if ($scope.startedAt){
        $scope.timeElapsed = new Date().getTime() - $scope.startedAt.getTime()
      } else {
        $scope.timeElapsed = 0;
      }

        $timeout(tick, 100);
    }
    $timeout(tick, 100);

    $scope.restartTest = function(){
      $scope.finished = false;
      $scope.success = [];
      $scope.error = [];
      $scope.validation = [];
      initWords();


    }
    $scope.$watchGroup(["wordIndex", "charIndex"], function(newVal, oldVal){
      if (newVal[1] && !$scope.startedAt){
        console.log("starting timer", newVal)
        $scope.startedAt = new Date();
        $scope.finished = false;
        $timeout(function(){
          console.log("test ended");
          $scope.finished = true;
          $scope.measuredWPM = $scope.success.length * (60 / ($scope.testLengthMs / 1000))
        }, $scope.testLengthMs)
      }


        var stats = $scope.getStats();
      if (!$scope.finished){
        $scope.validation = stats.map(function(item){ return item })
        $scope.success = stats.filter(function(item){ return item })
        $scope.failure = stats.filter(function(item){ return !item })
      }

        console.log("wordIndex changed", newVal, stats);
    });
    $scope.getStats = function(){
      console.log("typedWords", $scope.typedWords)
      return $scope.typedWords.map(function(chars, wordIndex){
        return chars.join("") === $scope.words[wordIndex]
      })
    }
    var handleKey = function(keyCode){
      console.log("handling key", keyCode);

      if (keyCode === 13){
        $scope.restartTest();
        return;
      }

      if ($scope.finished){
        return;
      }

      var char;
      if (keyCode === 8) { //backspace
        if ($scope.charIndex){
          delete $scope.typedWords[$scope.wordIndex][$scope.charIndex];
          $scope.charIndex--;
        } else if ($scope.wordIndex){
          delete $scope.typedWords[$scope.wordIndex];
          $scope.wordIndex--;
          $scope.charIndex = $scope.words[$scope.wordIndex].length -1

        }

        $scope.$apply();
        return;
      }

      if (keyCode === 32){ //space
        char = " ";
      } else {
        char = String.fromCharCode(keyCode);
      }


      if (!$scope.typedWords[$scope.wordIndex]) {
        console.log("inserting char", $scope.charIndex)
        $scope.typedWords[$scope.wordIndex] = [];
      }

      /*else {
        console.log("creating word", $scope.wordIndex)
      }
      */

      $scope.typedWords[$scope.wordIndex][$scope.charIndex] = char;

      if ($scope.words[$scope.wordIndex].length -1 === $scope.charIndex) {
        //proceed to next word
        $scope.wordIndex++;
        $scope.charIndex = 0;
      } else {
        $scope.charIndex++;
      }

      $scope.$apply();

    }

    $document.bind("keyup keypress", function(event) {
      if ('keyup' === event.type && event.keyCode === 8
        || 'keyup' === event.type && event.keyCode === 32
        || 'keypress' === event.type && event.keyCode && event.keyCode !== 8 && event.keyCode !== 32) {
        handleKey(event.keyCode)
      }
    });

  });
