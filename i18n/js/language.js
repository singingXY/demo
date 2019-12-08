let getNavLanguage = function() {
  if (navigator.appName == 'Netscape') {
    let navLanguage = navigator.language
    return navLanguage.substr(0, 2)
  }
  return false
}

let execI18n = function() {
  let defaultLanguage = 'zh'
  let locale = getNavLanguage()

  jQuery.i18n.properties({
    name: 'Messages',
    path: 'properties/',
    mode: 'both',
    language: locale || defaultLanguage,
    callback: function() {
      // init html by translated resources
      let insertEle = $('.i18n')
      insertEle.each(function() {
        $(this).html($.i18n.prop($(this).attr('name')))
      })

      // Accessing a simple value through a JS letiable
      alert(msg_hello + ' ' + msg_world)
      // Accessing a value with placeholders through a JS function
      //alert(msg_complex('John', 'Monday'))
    },
  })
}

$(function() {
  execI18n()
})
