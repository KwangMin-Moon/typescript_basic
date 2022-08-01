{
  /*
  union은 발생할 수 있는 모든 케이스 중에 한가지만 선택하는 것이었다면 intersection은 모든 걸 다 합한 성격을 가진다.
   * Intersection Types: & 다양한 타입들을 하나로 묶어서 선언할 수 있다.
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId, person.work());
  }

  interWork({
    name: 'jason',
    score: 1,
    employeeId: 123,
    work: () => {},
  });
  // student, worker 타입 둘 다 작성해야 에러가 발생하지 않는다.
}
