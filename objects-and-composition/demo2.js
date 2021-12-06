function createRec(width, height) {
    const rect = {width, height};

    rect.getArea = () => {
        return this.width * this.height;
    };

    return rect;
}


console.log(createRec(5, 5));