function Comment(string){
  this.text = string
  this.render = function(){
    return `<li>${this.text}</li>`
  }
}
function CommentList(array_of_comments){
  //constructors
  this.comments = array_of_comments
  //methods
  this.render = function(){
    var insideText = ""
    this.comments.forEach(function(comment){
      insideText += comment.render()
    })
    return `<ul>${insideText}</ul>`
  }
  this.addComment = function(new_comment){
    this.comments.push(new_comment)
  }
}

$(document).ready(function(){
  var comment_list = new CommentList([])

  $("#note-form").submit(function(e){
    e.preventDefault
    //preventing user from adding empty comments
    if($("input:text").val() != ''){
      var comment = new Comment($("input:text").val())
      comment_list.addComment(comment)
      $("input:text").val('')
      $("#comment-list").html(comment_list.render())
    }
    return false
  })

})
