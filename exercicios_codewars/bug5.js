class SmallestIntegerFinder {
  findSmallesInt(args) {
    let keepFirstNumber = args[0];

    for (let i = 1; i < args.length; i++) {
      if (args[i] < keepFirstNumber) {
        keepFirstNumber = args[i];
      }
    }
    return keepFirstNumber;
  }
}

const a1 = new SmallestIntegerFinder();
console.log(a1.findSmallesInt([78,56,232,12,8]));
