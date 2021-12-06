function print() {
    console.log(`${this.name} is printing a page`);
}

function scan() {
    console.log(`${this.name} is scanning document`);
}

const printer = {
    name: 'ACME Printer',
    print
};

const scanner = {
    name: 'Initech Scanner',
    scan
};

const copier = {
    name: 'ComTron Copier',
    scan, 
    print
}

printer.print();
scanner.scan();
copier.scan();
copier.print();


if (typeof printer.print == 'function') {
    console.log(`this device can print`);
} else {
    console.log(`this device can't print`);

}
