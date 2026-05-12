console.log("--- Завдання 1: Змінні та типи даних ---");
const str = "Привіт, світ!";
const num = 42;
const bool = true;
const n = null;
let undef;
const sym = Symbol("id");
const bigIntNum = 9007199254740991n;

console.log(`Значення: ${str}, Тип: ${typeof str}`);
console.log(`Значення: ${num}, Тип: ${typeof num}`);
console.log(`Значення: ${bool}, Тип: ${typeof bool}`);
console.log(`Значення: ${n}, Тип: ${typeof n}`); 
console.log(`Значення: ${undef}, Тип: ${typeof undef}`);
console.log(`Значення: ${sym.toString()}, Тип: ${typeof sym}`);
console.log(`Значення: ${bigIntNum}, Тип: ${typeof bigIntNum}`);

console.log("\nПеретворення типів:");
console.log(String(100), typeof String(100));
console.log(Number("123"), Number(""), Number(true), Number(null), Number(undefined));
console.log(Boolean(0), Boolean(""), Boolean(null), Boolean(NaN), Boolean("Hello"));

const name = "Єлєна";
const age = 20;
const university = "ХАІ";
console.log(`Студент: ${name}, вік: ${age}, університет: ${university}`);

console.log("\nПорівняння == та ===:");
console.log(`5 == "5": ${5 == "5"}`);     
console.log(`5 === "5": ${5 === "5"}`);   
console.log(`null == undefined: ${null == undefined}`); 
console.log(`null === undefined: ${null === undefined}`); 


console.log("\n--- Завдання 2: Умови та логіка ---");

function getGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
        return "невалідний бал";
    }
    if (score >= 90) return "відмінно";
    if (score >= 75) return "добре";
    if (score >= 60) return "задовільно";
    return "незадовільно";
}

function getSeasonUA(month) {
    switch (month) {
        case 12: case 1: case 2: return "Зима";
        case 3: case 4: case 5: return "Весна";
        case 6: case 7: case 8: return "Літо";
        case 9: case 10: case 11: return "Осінь";
        default: return "Невірний номер місяця";
    }
}

const studentAge = 19;
const status = studentAge >= 18 ? "повнолітній" : "неповнолітній";

console.log("Оцінка (85):", getGrade(85));
console.log("Оцінка (105):", getGrade(105));
console.log("Пора року (5):", getSeasonUA(5));
console.log("Статус студента:", status);


console.log("\n--- Завдання 3: Масиви ---");

let students = [
    { name: "Олена Коваленко", grade: 87, courses: ["JavaScript", "HTML"] },
    { name: "Іван Петренко", grade: 92, courses: ["JavaScript", "CSS"] },
    { name: "Марія Сидоренко", grade: 55, courses: ["HTML"] },
    { name: "Олег Бондар", grade: 78, courses: ["JavaScript", "React"] },
    { name: "Анна Ткаченко", grade: 95, courses: ["CSS", "Design"] },
    { name: "Дмитро Кравченко", grade: 64, courses: ["JavaScript"] }
];

students.push({ name: "Новий Студент", grade: 70, courses: ["Git"] });
students.pop();
students.splice(2, 1);
students.splice(1, 0, { name: "Вставлений Студент", grade: 88, courses: ["SQL"] });

const topStudent = students.find(s => s.grade > 90);
console.log("Перший відмінник:", topStudent?.name);

const jsStudents = students.filter(s => s.courses.includes("JavaScript"));
console.log("Вивчають JS:", jsStudents.map(s => s.name));

const avgGrade = students.reduce((acc, curr) => acc + curr.grade, 0) / students.length;
console.log("Середня оцінка групи:", avgGrade.toFixed(2));


console.log("\n--- Завдання 4: Функції ---");

function areaDecl(a, b) { return a * b; }
const areaExpr = function(a, b) { return a * b; };
const areaArrow = (a, b) => a * b;

function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log("Counter value:", counter.getValue());

function createUser(name, role = "student") {
    return { name, role };
}

const sumAll = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log("Сума (1,2,3,4):", sumAll(1, 2, 3, 4));

function printStudentInfo({ name, grade }) {
    console.log(`Студент ${name} має бал ${grade}`);
}
printStudentInfo(students[0]);


console.log("\n--- Завдання 5: Обʼєкти ---");

const studentProfile = {
    firstName: "Єлена",
    lastName: "Ушинкіна",
    age: 20,
    university: "ХАІ",
    grades: {
        math: 85,
        physics: 92,
        javascript: 98
    },
    isActive: true,
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    getAverageGrade() {
        const values = Object.values(this.grades);
        const sum = values.reduce((acc, g) => acc + g, 0);
        return sum / values.length;
    }
};

console.log("Доступ через крапку:", studentProfile.university);
const key = "age";
console.log("Динамічний доступ через дужки [key]:", studentProfile[key]);

console.log("Ключі:", Object.keys(studentProfile));
console.log("Значення:", Object.values(studentProfile));
console.log("Entries (пари ключ-значення):", Object.entries(studentProfile));

const updatedProfile = { ...studentProfile, age: 21 };
console.log("Оригінальний вік:", studentProfile.age); // 20
console.log("Новий вік у копії:", updatedProfile.age); // 21

console.log("Оцінка за лабу (існує):", studentProfile.grades?.math);
console.log("Ім'я ментора (не існує):", studentProfile.mentor?.name ?? "Не призначено");


console.log("\n--- Завдання 6: Ланцюжки методів ---");

const products = [
    { name: "Ноутбук", price: 30000, category: "electronics", inStock: true, quantity: 2 },
    { name: "Смартфон", price: 15000, category: "electronics", inStock: true, quantity: 5 },
    { name: "Мишка", price: 500, category: "electronics", inStock: false, quantity: 0 },
    { name: "Клавіатура", price: 1200, category: "electronics", inStock: true, quantity: 3 },
    { name: "Монітор", price: 7000, category: "electronics", inStock: true, quantity: 1 },
    { name: "Стіл", price: 4500, category: "furniture", inStock: true, quantity: 2 },
    { name: "Крісло", price: 3200, category: "furniture", inStock: false, quantity: 0 },
    { name: "Лампа", price: 800, category: "furniture", inStock: true, quantity: 10 }
];

const totalInStockValue = products
    .filter(p => p.inStock)
    .map(p => p.price * p.quantity)
    .reduce((acc, val) => acc + val, 0);
console.log("Загальна вартість товарів у наявності:", totalInStockValue);

const sortedElectronics = products
    .filter(p => p.category === "electronics")
    .sort((a, b) => a.price - b.price)
    .map(p => p.name);
console.log("Електроніка (за ціною):", sortedElectronics);

const categoryCount = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
}, {});
console.log("Кількість по категоріях:", categoryCount);

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
const sortedByName = [...students].sort((a, b) => a.name.localeCompare(b.name));

console.log("Студенти за оцінкою:", sortedByGrade.map(s => `${s.name}: ${s.grade}`));
console.log("Студенти за алфавітом:", sortedByName.map(s => s.name));


console.log("\n--- Завдання 7: Рядки ---");

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalize("javaScript")); // "Javascript"

const countWords = (str) => str.trim().split(/\s+/).length;
console.log("Кількість слів:", countWords(" JavaScript це  круто ")); // 3

const truncate = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};
console.log(truncate("Це довгий текст для прикладу", 15));

function isValidEmail(email) {
    if (!email.includes("@")) return false;
    
    const parts = email.split("@");
    if (parts.length !== 2) return false; 
    
    const [name, domain] = parts;
    if (name.length === 0) return false; 
    
    if (!domain.includes(".")) return false; 
    
    const domainParts = domain.split(".");
    const lastPart = domainParts[domainParts.length - 1];
    
    if (domain.startsWith(".") || lastPart.length < 2) return false;
    
    return true;
}

console.log("Email test (user@example.com):", isValidEmail("user@example.com")); 
console.log("Email test (user@.com):", isValidEmail("user@.com")); 


