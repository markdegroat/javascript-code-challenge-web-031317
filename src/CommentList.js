function commentList(array_of_comments){
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

  this.addComment = function(comment_text){
    var new_comment = new comment(comment_text)
    this.comments.push(comment)
  }
}
