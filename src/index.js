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

function ContainsSwearWord(string){
  var swear_bool = false

  if(string.toLowerCase().indexOf("fuck") >= 0){
    swear_bool = "true"
  }
  if(string.toLowerCase().indexOf("shit") >= 0){
    swear_bool = "true"
  }
  if(string.toLowerCase().indexOf("ass") >= 0){
    swear_bool = "true"
  }
  if(string.toLowerCase().indexOf("butt") >= 0){
    swear_bool = "true"
  }
  if(string.toLowerCase().indexOf("stupid") >= 0){
    swear_bool = "true"
  }
  if(string.toLowerCase().indexOf("mark") >= 0){
    swear_bool = "true"
  }
  return swear_bool
}

$(document).ready(function(){
  var comment_list = new CommentList([])

  $("#note-form").submit(function(e){
    e.preventDefault
    //preventing user from adding empty comments
    if($("input:text").val() != '' && !ContainsSwearWord($("input:text").val())){
      var comment = new Comment($("input:text").val())
      comment_list.addComment(comment)
      $("input:text").val('')
      $("#comment-list").html(comment_list.render())
    }else{
      alert("You're either not entering anything or being a potty mouth, either way knock it off!")
      $("input:text").val('')
    }
    return false
  })

})
