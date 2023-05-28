// visitor 테이블 구조 정의 예정
const Visitor = function (Sequelize, DataTypes) {
  // Sequelize는 model/index.js에서의 sequelize
  // DataTypes는 model/index.js에서의 Sequelize

  // Sequilize.define(param1, param2, param3)
  // param1: 모델(테이블) 이름 설정
  // param2: 컬럼 정의
  // param3: 모델 옵션 정의
  const model = Sequelize.define(
    'visitor', // param1: 모델(테이블) 이름 설정
    // 15에서 진행했던 테이블과 구분하기 위해 2 숫자 붙여봄 (visitor2)
    // -> (조건)mysql에서 visitor2로 테이블 생성은 해주어야 함
    {
      id: {
        // id int not null primary key auto_increment
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name varchar(10) not null
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment mediumtext
        type: DataTypes.TEXT('medium'),
      },
    }, // param2: 컬럼 정의
    {
      tableName: 'visitor',
      freezeTableName: true,
      // 키 이름 그대로 테이블 이름 고정!!
      timestamps: false,
      // - 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록함.
      //    -> 우리는 관련 컬럼을 만들어두지 않았으므로 false로 지정
    }, // 인자3: 모델의 옵션 정의
  );

  return model;
};

module.exports = Visitor;
