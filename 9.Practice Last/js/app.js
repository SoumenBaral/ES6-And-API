// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে।
//  তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর 
//  মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই 
//  মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা 
//  প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 
const Person ={
    name: "soumen Baral",
    Job : "Web developer",
    dailyActivity : {
        weakUp: 10,
        fresh : 9.45,
        work: "all day javaScript "
    },
    mark:[10,23,43,22,12,12,34],
    doIt: function(){
        return `${this.name} do't west his time he is so punctual and he is a ${this.Job}` 
    }

    
}

const thickAse = Person.doIt();
// console.log(thickAse); 

// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো।
//   সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার
//   টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা 
//   নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি 
//   এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি
//   একটা তোমার ইচ্ছা মতো বসাতে পারো। 

const template = ` ${Person.name} is a very good at ${Person.dailyActivity.work} and his lucky number is ${Person.mark[1]}`;
// console.log(template);

// ৩ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। 
// ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার
//  এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে
//   সেটা চিন্তা করে বের করার চেষ্টা করো। 

const add =(first,second)=>{
    const result = (first+7)+(second+7);
    return result;
}

// console.log(add(1,2));

// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে
//  map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে 
//  রাখবে। পুরা কাজটা এক লাইনে হবে। 

const numbers = [10,20,30,40,50,60,70,80,90,100];
const newNumber =  numbers.map(number=>parseFloat((number/7).toFixed(2)));
// console.log(newNumber);

// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find 
// কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।

//Map--Map koira den vai map koira den . Map akta loop jaikhane amra array ar upor map kori 
//      and akta akta single element pai oigulare kisu koira retun dai ;

// forEach: aito map ar moton aikhane sob hobe but return hobe na 
// filter : filter use korte amago condition dite hobe jodi condition milla jay tile jai jai gular 
//           shate condition milbe oi sob gula dibe 
// find   : find o filter ar moton difference hoiloo find a sudu 1st a jaita milbe oi akta 
//           debe ar kisu dibe na ;


// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল 
// হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর 
// destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন 
// এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const{name, ...another}=Person;
console.log(name,another);
