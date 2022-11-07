$(() => {
    // jquery functions for animating letter on first page, function from speckyboy.com, modifified to work with jquery. 
var particleAlphabet = {
  Particle: function(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 4.5;
    this.draw = function(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.fillStyle = 'lightseagreen';
      ctx.fillRect(0, 0, this.radius, this.radius);
      ctx.restore();
    };
  },
  init: function() {
    particleAlphabet.canvas = document.querySelector('canvas');
    particleAlphabet.ctx = particleAlphabet.canvas.getContext('2d');
    particleAlphabet.W = window.innerWidth;
    particleAlphabet.H = window.innerHeight;
    particleAlphabet.particlePositions = [];
    particleAlphabet.particles = [];
    particleAlphabet.tmpCanvas = document.createElement('canvas');
    particleAlphabet.tmpCtx = particleAlphabet.tmpCanvas.getContext('2d');

    particleAlphabet.canvas.width = particleAlphabet.W;
    particleAlphabet.canvas.height = particleAlphabet.H;

    setInterval(function(){
      particleAlphabet.changeLetter();
      particleAlphabet.getPixels(particleAlphabet.tmpCanvas, particleAlphabet.tmpCtx);
    }, 1200);

    particleAlphabet.makeParticles(1000);
    particleAlphabet.animate();
  }, 
  currentPos: 0,
  changeLetter: function() {
    var letters = 'MatthewChin',
      letters = letters.split('');
    particleAlphabet.time = letters[particleAlphabet.currentPos];
    particleAlphabet.currentPos++;
    if (particleAlphabet.currentPos >= letters.length) {
        //reloads page to hide function when done
        location.reload();
        //if wanted to repeat, reset currentPos to 0
    //   particleAlphabet.currentPos = 0;
    }
  },
  makeParticles: function(num) {
    for (var i = 0; i <= num; i++) {
      particleAlphabet.particles.push(new particleAlphabet.Particle(particleAlphabet.W / 2 + Math.random() * 400 - 200, particleAlphabet.H / 2 + Math.random() * 400 -200));
    }
  },
  getPixels: function(canvas, ctx) {
    var keyword = particleAlphabet.time,
      gridX = 6,
      gridY = 6;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'red';
    ctx.font = 'italic bold 330px Noto Serif';
    ctx.fillText(keyword, canvas.width / 2 - ctx.measureText(keyword).width / 2, canvas.height / 2 + 100);
    var idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var buffer32 = new Uint32Array(idata.data.buffer);
    if (particleAlphabet.particlePositions.length > 0) particleAlphabet.particlePositions = [];
    for (var y = 0; y < canvas.height; y += gridY) {
      for (var x = 0; x < canvas.width; x += gridX) {
        if (buffer32[y * canvas.width + x]) {
          particleAlphabet.particlePositions.push({x: x, y: y});
        }
      }
    }
  },
  animateParticles: function() {
    var p, pPos;
    for (var i = 0, num = particleAlphabet.particles.length; i < num; i++) {
      p = particleAlphabet.particles[i];
      pPos = particleAlphabet.particlePositions[i];
      if (particleAlphabet.particles.indexOf(p) === particleAlphabet.particlePositions.indexOf(pPos)) {
      p.x += (pPos.x - p.x) * .3;
      p.y += (pPos.y - p.y) * .3;
      p.draw(particleAlphabet.ctx);
    }
    }
  },
  animate: function() {
    requestAnimationFrame(particleAlphabet.animate);
    particleAlphabet.ctx.fillStyle = 'rgba(0, 0, 0, .8)';
    particleAlphabet.ctx.fillRect(0, 0, particleAlphabet.W, particleAlphabet.H);
    particleAlphabet.animateParticles();
  }
};


//clicking on div class magic will initiate particle function. 
const $magic = $(".text-wrapper");
$magic.on("click", particleAlphabet.init);





    //attempt to get a sticky nav bar, made it work in CSS. 
    window.onscroll = function () { myFunction() };

    // let nav = document.getElementById("nav");

    // let sticky1 = nav.offsetTop;

    
    const myFunction =() => {
        if (window.pageYOffset >= sticky1) {
            nav.classList.add("sticky")
        } else {
            nav.classList.remove("sticky");
        }
    }


    //carousel functions
    let currentImgIndex = 0;
    let numOfImages = $(".carousel-images").children().length - 1;
    $(".next").on("click", () => {
      $(".carousel-images").children().eq(currentImgIndex).css("display", "none");
      if (currentImgIndex < numOfImages) {
        currentImgIndex++;
      } else {
        currentImgIndex = 0;
      }
      $(".carousel-images")
        .children()
        .eq(currentImgIndex)
        .css("display", "block");
    });
  
    $(".previous").on("click", () => {
      $(".carousel-images").children().eq(currentImgIndex).css("display", "none");
      if (currentImgIndex > 0) {
        currentImgIndex--;
      } else {
        currentImgIndex = numOfImages;
      }
      $(".carousel-images")
        .children()
        .eq(currentImgIndex)
        .css("display", "block");
    });

    //modal functions for project 1
    const openModal = () => {
        $modal.css({
          display: "block",
        });
      };
      const closeModal = () => {
        $modal.css({
          display: "none",
        });
      };
    
      const $openBtn = $("#openModal");
      const $modal = $("#modal");
      const $closeBtn = $("#close");
    
    
      $openBtn.on("click", openModal);
      $closeBtn.on("click", closeModal);

      //modal function for project 2


      const openModal1 = () => {
        $modal1.css({
          display: "block",
        });
      };
      const closeModal1 = () => {
        $modal1.css({
          display: "none",
        });
      };
    
      const $openBtn1 = $("#openModal1");
      const $modal1 = $("#modal1");
      const $closeBtn1 = $("#close1");
    
    
      $openBtn1.on("click", openModal1);
      $closeBtn1.on("click", closeModal1);

      //modal function for resume 

      const openModal2 = () => {
        $modal2.css({
          display: "block",
        });
      };
      const closeModal2 = () => {
        $modal2.css({
          display: "none",
        });
      };
    
      const $openBtn2 = $("#openModal2");
      const $modal2 = $("#modal2");
      const $closeBtn2 = $("#close2");
    
    
      $openBtn2.on("click", openModal2);
      $closeBtn2.on("click", closeModal2);



  });
