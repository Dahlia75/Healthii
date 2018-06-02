
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {id: 11, user_id: 11, first_name: 'Alice', last_name: 'Smith', phone: '7782346868', address:'1168 marin-dr, NorthVan', gender:'F', age: 35, m_history:'surgery in hand'},
        {id: 12, user_id: 12, first_name: 'James', last_name: 'Miller', phone: '7782346345', address:'1282 Yonge Street, WestVan', gender:'M', age: 30, m_history:'pain in hand'},
        {id: 13, user_id: 13, first_name: 'Robert', last_name: 'Brown', phone: '6042346234', address:'1206 Cork St, Delta', gender:'M', age: 50, m_history:'pain in leg'},
        {id: 14, user_id: 14, first_name: 'Michael', last_name: 'Rogers', phone: '7782346163', address:'4991 René-Lévesque West, St Hyacinthe', gender:'M', age: 69, m_history:'surgery in hand'},
        {id: 15, user_id: 15, first_name: 'William', last_name: 'King', phone: '7782346847', address:'4347 Craven Place, Delta', gender:'M', age: 60, m_history:'surgery in leg'},
        {id: 16, user_id: 16, first_name: 'David', last_name: 'Reed', phone: '6042348283', address:'4675 Saint-Denis Street, Surrey', gender:'M', age: 72, m_history:'pain in chest'},
        {id: 17, user_id: 17, first_name: 'Richard', last_name: 'Perry', phone: '7782347136', address:'410 Burdett Avenue, NorthVan', gender:'M', age: 46, m_history:'surgery in hand'},
        {id: 18, user_id: 18, first_name: 'Joseph', last_name: 'Henderson', phone: '7782349292', address:'2040 Dominion St, WestVan', gender:'M', age: 30, m_history:'pain in fingers'},
        {id: 19, user_id: 19, first_name: 'Mary', last_name: 'Bennett', phone: '6042342020', address:'3456 Dry Pine Bay Rd, NorthVan', gender:'F', age: 31, m_history:'several pan in back'},
        {id: 20, user_id: 20, first_name: 'Patricia', last_name: 'Ross', phone: '7782347373', address:'1988 Royal Avenue, Surrey', gender:'F', age: 12, m_history:'pain in chest'},
        {id: 21, user_id: 21, first_name: 'Jennifer', last_name: 'Patterson', phone: '7782343636', address:'2531 Pine Street, WestVan', gender:'F', age: 18, m_history:'pain in eyes'},
        {id: 22, user_id: 22, first_name: 'Linda', last_name: 'Hughes', phone: '6042349090', address:'4791 Tolmie St, Delta', gender:'F', age: 24, m_history:'Headache with glass'},
        {id: 23, user_id: 23, first_name: 'Susan', last_name: 'Flores', phone: '7782342792', address:'4183 James Street, Richmond', gender:'F', age: 36, m_history:'surgery in heart'},
        {id: 24, user_id: 24, first_name: 'Margaret', last_name: 'Washington', phone: '6042344000', address:'2561 Maynard Rd, NorthVan', gender:'F', age: 88, m_history:'Headache on morning'},
        {id: 25, user_id: 25, first_name: 'Charles', last_name: 'Simmons', phone: '7782341030', address:'2191 Reserve St, WestVan', gender:'F', age: 55, m_history:'surgery in neck'},
      ]);
    });
};
