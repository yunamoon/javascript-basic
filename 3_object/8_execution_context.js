/**
 * Execution Context  (실행 컨텍스트)
 * 
 * Execution Context는 실행하려는 JS 코드와 코드를 실행할 때 필요한 정보를 담고 있는 특수한 환경이다.
 * 코드 실행에 필요한 모든 데이터를 들고 있는 환경이라고 생각하면 된다.
 * 
 * Execution Context는 크게 두개로 나뉘어진다.
 *  1) Global Context
 *  최상위 Execution Context로, 코드를 실행하면 무조건 생성되는 context로 
 *  웹에서의 window 객체니 node.js에서의 global 객체를 생성하고 들고 있다.
 *  2) Function Context
 *  함수가 실행될때마다 함수별로 실행되는 context로, 함수 실행에 대한 모든 정보를 갖고 있다.
 * 
 * Memory Heap & Call Stact 
 * 
 *  자바스크립트는 싱글 스레드로, 하나의 Memory heap과 하나의 Call stack이 존재.
 *  1) Memory Heap
 *  메모리를 관리하는 공간
 *  2) Call Stack (Execution Context Stack)
 *  가장 늦게 들어온 게 먼저 나가는 구조를 Stack이라고 한다.
 * 
 * Execution Context Stack
 * 
 *  1) Create Phase
 *  - Global Object를 생성하며, window 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성된다.
 *  - thins를 window 또는 global에 바인딩한다.
 *  - 변수와 함수를 Memory Heap에 배정하고 기본값을 undefined로 저장한다.
 *  2) Execution Phase
 *  - 코드를 실행한다.
 *  - 필요하다면 새로운 Exeution Context를 생성한다.
 * 
 */