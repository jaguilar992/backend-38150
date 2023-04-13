class Singleton {
  private static instance;

  private constructor() {}
  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const obj = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log("Instances are the same", obj === obj2);