function fibonacci(n) {
  // 피보나치 수열 n번째 항의 수 구하기
  // fibo(n -1) + fibo(n - 2)
  // 최적화기법 사용, 시간복잡도..?
  // 메모이제이션
  // 새로운 함수를 생성
  // 함수 안에서 재귀적으로 접근
  // base case를 배열에 메모해 둔다.
  // 재귀 함수를 실행하며 나온 값은 다시 실행하여 접근하지 않는다.
  // ? 왜 안에 함수를 다시 만들어 줬나?

  const memo = [0, 1] // memo 변수가 aux함수의 전역 변수로 있어야 테스트 통과... 왜?
  // aux 재귀함수가 돌아가면서 memo가 없을 경우 memo 변수에 추가해줘야 하는데, 
  // aux 함수 안에 있으면, 함수가 재귀 될때마다...어떻게 되나?

  const aux = (n) => {
    if(memo[n] !== undefined) { // memo안에 n이 있으면 memo[n]을 그대로 리턴
      return memo[n]
    }
    // memo[n]이 없으면 피보나치로 memo[n]을 만들어서 재귀
    memo[n] = aux(n -1) + aux(n -2)
    return memo[n]
  } 
  return aux(n) // 피보나치 n을 만든 aux함수에 n을 입력해서 결과 리턴

}
