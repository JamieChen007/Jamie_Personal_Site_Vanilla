setTimeout(function () {
  //   document.styleSheets[0].addRule(".username::before", "display:none"); // support IE
  //   document.styleSheets[0].addRule(".username::after", "display:none"); // support IE
  //   document.styleSheets[0].insertRule(".username::before { display:none }", 0); // support none-IE
  //   document.styleSheets[0].insertRule(".username::after { display:none }", 0); // support none-IE

  document.styleSheets[0].insertRule(
    ".blog_title_topic::before { display:none }",
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    ".blog_title_topic::after { display:none }",
    document.styleSheets[0].cssRules.length
  );

  document.styleSheets[0].insertRule(
    ".blog_title_number::before { display:none }",
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    ".blog_title_number::after { display:none }",
    document.styleSheets[0].cssRules.length
  );

  document.styleSheets[0].insertRule(
    ".blog_title_content::before { display:none }",
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    ".blog_title_content::after { display:none }",
    document.styleSheets[0].cssRules.length
  );

  document.styleSheets[0].insertRule(
    ".blog_img::before { display:none }",
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    ".blog_img::after { display:none }",
    document.styleSheets[0].cssRules.length
  );

  document.styleSheets[0].insertRule(
    ".blog_article_title::before { display:none }",
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    ".blog_article_title::after { display:none }",
    document.styleSheets[0].cssRules.length
  );

  document.styleSheets[0].insertRule(
    ".blog_article_date::before { display:none }",
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    ".blog_article_date::after { display:none }",
    document.styleSheets[0].cssRules.length
  );

  document.styleSheets[0].insertRule(
    ".blog_article_content_p1::before { display:none }",
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    ".blog_article_content_p1::after { display:none }",
    document.styleSheets[0].cssRules.length
  );

  document.styleSheets[0].insertRule(
    ".blog_article_content_p2::before { display:none }",
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    ".blog_article_content_p2::after { display:none }",
    document.styleSheets[0].cssRules.length
  );

  document.styleSheets[0].insertRule(
    ".blog_article_button_submit { opacity: 1 }",
    document.styleSheets[0].cssRules.length
  );
}, 3000);
