$('.carousel').slick({
  slidesToShow: 3,
  dots:true,
  centerMode: true,
  });

const htmlTitle = `<div class="new-text">
                    <input type="text">
                    <button class="remove">zmień</button>
                  </div>`;

const htmlText = `<div class="new-text">
                    <input type="text" class="input-text">
                    <button class="remove">zmień</button>
                  </div>`;

  $('.article-title-box,.article-text-box').mouseover(function(){
    $(this).css('cursor', 'text').attr('title', 'Zmień nagłówek');
  });

  $('.article-title-box').one('click',function(){
    $(this).append(htmlTitle);
  
    $('input').on('input', function(){ 
      val = $(this).val();
      article = $(this).closest('div.new-text').closest('h1');
    });

    $('button.remove').click(function(){
      article.text(val);
      $(this).parent('div').remove();
    });
  });

  $('.article-text-box').one('click',function(){
    $(this).append(htmlText);
  
    $('input.input-text').on('input', function(){ 
      val = $(this).val();
      article = $(this).closest('div.new-text').closest('p');
    });

    $('button.remove').click(function(){
      article.text(val);
      $(this).parent('div').remove();
    });
  });


  

 

 

  