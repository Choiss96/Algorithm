let dfs = function (node) {
    let values = [node.value];
  
    node.children.forEach((n) => {
      values = values.concat(dfs(n));
    });
  
    return values;
  };
  

  let Node = function (value) {
    this.value = value;
    this.children = [];
  };
  
  // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
  // membership check(중복 확인)를 따로 하지 않습니다.
  Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
  };  