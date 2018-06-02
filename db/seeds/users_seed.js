var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

let hash = [];
function encrypted_password(){
  for (var i = 1; i < 26; ++i) {
    let pass = "pass" + i;
    hash[i-1] = bcrypt.hashSync("pass", salt);
  }
  return hash;
}

// Add data to tables
exports.seed = function(knex, Promise) {
  const password = encrypted_password();

  const deleteServices = Promise.all([
    knex('services').del()]);
  const deleteUsers = deleteServices
    .then(() => {
      return knex('users').del();
    });

  const createUsers = deleteUsers
    .then(() => {
      return knex('users')
        .returning('*')
        .insert([{id: 1, email: 'dahlia@dahlia.com', password: password[0], type: true},
          {id: 2, email: 'mehdi@mehdi.com', password: password[1], type: true},
          {id: 3, email: 'chris@chris.com', password: password[2], type: true},
          {id: 4, email: 'sam@sam.com', password: password[3], type: true},
          {id: 5, email: 'mark@mark.com', password: password[4], type: true},
          {id: 6, email: 'Joel@Joel.com', password: password[5], type: true},
          {id: 7, email: 'Jeremy@Jeremy.com', password: password[6], type: true},
          {id: 8, email: 'Rosey@Rosey.com', password: password[7], type: true},
          {id: 9, email: 'Don@Don.com', password: password[8], type: true},
          {id: 10, email: 'rohit@rohit.com', password: password[9], type: true},
          {id: 11, email: 'alice@alice.com', password: password[10], type: false},
          {id: 12, email: 'James@James.com', password: password[11], type: false},
          {id: 13, email: 'Robert@Robert.com', password: password[12], type: false},
          {id: 14, email: 'Michael@Michael.com', password: password[13], type: false},
          {id: 15, email: 'William@William.com', password: password[14], type: false},
          {id: 16, email: 'David@David.com', password: password[15], type: false},
          {id: 17, email: 'Richard@Richard.com', password: password[16], type: false},
          {id: 18, email: 'Joseph@Joseph.com', password: password[17], type: false},
          {id: 19, email: 'Mary@Mary.com', password: password[18], type: false},
          {id: 20, email: 'Patricia@Patricia.com', password: password[19], type: false},
          {id: 21, email: 'Jennifer@Jennifer.com', password: password[20], type: false},
          {id: 22, email: 'Linda@Linda.com', password: password[21], type: false},
          {id: 23, email: 'Susan@Susan.com', password: password[22], type: false},
          {id: 24, email: 'Margaret@Margaret.com', password: password[23], type: false},
          {id: 25, email: 'Charles@Charles.com', password: password[24], type: false}
          ])
        .then(() => {
          return knex('services')
            .returning('*')
            .insert([{id: 1, name: 'Physiotherapy', descripton: 'Physiotherapy is a science-based profession and takes a ‘whole person’ approach to health and wellbeing, which includes the patient’s general lifestyle.', thumbnail: 'Physiotherapy helps restore movement and function when someone is affected by injury, illness or disability', price: 50, image: '../docs/Physiotherapist.png'},
              {id: 2, name: 'Acupuncture', descripton: 'Acupuncture is a complementary medical practice that entails stimulating certain points on the body, most often with a needle penetrating the skin, to alleviate pain or to help treat various health conditions.', thumbnail: 'Acupuncture is an ancient, safe and effective alternative to medication.', price: 40, image: '../docs/Acupuncture.jpg'},
              {id: 3, name: 'On-call Nurse', descripton: 'NURSE-ON-CALL puts you directly in touch with a registered nurse for caring, professional health advice around the clock', thumbnail: 'A phone service that provides immediate, expert health advice from a registered nurse, 24 hours a day, 7 days a week.', price: 25, image: '../docs/Nurse.png'},
              {id: 4, name: 'Chiropractor', descripton: 'A chiropractor is a health care professional focused on the diagnosis and treatment of neuromuscular disorders, with an emphasis on treatment through manual adjustment and/or manipulation of the spine.', thumbnail: 'Use hands-on spinal manipulation.', price: 35, image: '../docs/Chiropractor.png'},
              {id: 5, name: 'Home Health Aide', descripton: 'It is about caring, not just health care. That is why we are here to help get you back to doing the things you love. Whether its a little help around the house with meal preparation or medication reminders, let us do the caring.', thumbnail: 'Expert Home Health Care Services that specialize in Happiness. Get the care you deserve!', price: 25, image: '../docs/Health_Aide.jpg'},
              {id: 6, name: 'Massage Therapy', descripton: 'Massage therapy is the manipulation of soft tissues of the body including, muscles, connective tissues, tendons, ligaments and joints.', thumbnail: 'The assessment and diagnosis of soft tissue and joints of the body', price: 45, image: '../docs/Massage_Therapy.jpg'},
            ])
        });
    });
  return createUsers;
};