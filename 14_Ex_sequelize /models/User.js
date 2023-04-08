const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    'user', // param1: 모델(테이블) 이름 설정
    {
      id: {
        // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
          // userid VARCHAR(20) NOT NULL,
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        // name VARCHAR(10) NOT NULL,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
          // pw VARCHAR(20) NOT NULL
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    }, // param2: 컬럼 정의
    {
      tableName: 'user', // 실제 db table명
      freezeTableName: true, // 테이블명 고정!
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    } // param3: 모델 옵션 정의
  );

  return model;
};

module.exports = User;
