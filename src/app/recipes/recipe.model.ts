//created as a blueprint because there will be a lot of recipes used

export class Recipe {
  public name: string; 
  public description: string; 
  public imagePath: string; //will hold a url

  //executed once a new instance of the class is created
  constructor(name: string, desc: string, imagePath: string){
    this.name = name; 
    this.description = desc;
    this.imagePath = imagePath; 
  }
}