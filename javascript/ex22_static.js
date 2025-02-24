class Student {
  static count = 0;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    // this.count += 1; 객체 생성후에 객체 주소 접근  => static 변수는 이렇게 접근 불가능 
    Student.count += 1; // static은 클래스명으로만 접근 가능
  }
  printInfo = () => {
    console.log(`id : ${this.id} \t name: ${this.name}`);
  }

  getTotalStudent = () => {
    console.log(` 총 학생은 ${Student.count}명입니다`);
  }
  // function 은 다른 fuction? 클래스? 생성자? 안에서 사용 불가능? => 함수는 사용 가능?
  // function getTotalStudent(){
  //   console.log(` 총 학생은 ${Student.count}명입니다`);
  // }
}
const stu1 = new Student("11111", 'park');
const stu2 = new Student("22222", 'kim');
const stu3 = new Student("33333", 'lee');

const stuList = [stu1, stu2, stu3];

stuList.forEach(stu => stu.printInfo());

stu1.getTotalStudent();