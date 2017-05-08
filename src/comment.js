function comment(string){
  this.text = string
  this.render = function(){
    return `<li>${this.text}</li>`
  }
}
