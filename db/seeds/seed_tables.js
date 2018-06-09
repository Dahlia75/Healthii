
// var bcrypt = require('bcrypt');
// var salt = bcrypt.genSaltSync(10);

let hash = [];
function encrypted_password(){
  for (var i = 1; i < 26; ++i) {
    let pass = "pass" + i;
    // hash[i-1] = bcrypt.hashSync("pass", salt);
    hash[i-1] = "pass";
  }
  return hash;
}

exports.seed = function(knex, Promise) {
  const password = encrypted_password();

  const deleteAppointmentsReviews = Promise.all([
      knex('appointments').del(),
      knex('reviews').del()
    ]);

  const deleteService_Provider = deleteAppointmentsReviews
    .then(() => {
      return knex('service_provider').del();
    });

  const deleteServicesProvidersClients = deleteService_Provider
    .then(() => {
      return(
        Promise.all([
          knex('services').del(),
          knex('providers').del(),
          knex('clients').del()])
      )
    });

  const deleteUsers = deleteServicesProvidersClients
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
            .insert([
              {id: 1, name: 'Physiotherapy', descripton: 'Physiotherapy is a science-based profession and takes a ‘whole person’ approach to health and wellbeing, which includes the patient’s general lifestyle.', thumbnail: 'Physiotherapy helps restore movement and function when someone is affected by injury, illness or disability', price: 50, image: '../docs/Physiotherapist.png'},
              {id: 2, name: 'Acupuncture', descripton: 'Acupuncture is a complementary medical practice that entails stimulating certain points on the body, most often with a needle penetrating the skin, to alleviate pain or to help treat various health conditions.', thumbnail: 'Acupuncture is an ancient, safe and effective alternative to medication.', price: 40, image: '../docs/Acupuncture.jpg'},
              {id: 3, name: 'On-call Nurse', descripton: 'NURSE-ON-CALL puts you directly in touch with a registered nurse for caring, professional health advice around the clock', thumbnail: 'A phone service that provides immediate, expert health advice from a registered nurse, 24 hours a day, 7 days a week.', price: 25, image: '../docs/Nurse.png'},
              {id: 4, name: 'Chiropractor', descripton: 'A chiropractor is a health care professional focused on the diagnosis and treatment of neuromuscular disorders, with an emphasis on treatment through manual adjustment and/or manipulation of the spine.', thumbnail: 'Use hands-on spinal manipulation.', price: 35, image: '../docs/Chiropractor.png'},
              {id: 5, name: 'Home Health Aide', descripton: 'It is about caring, not just health care. That is why we are here to help get you back to doing the things you love. Whether its a little help around the house with meal preparation or medication reminders, let us do the caring.', thumbnail: 'Expert Home Health Care Services that specialize in Happiness. Get the care you deserve!', price: 25, image: '../docs/Health_Aide.jpg'},
              {id: 6, name: 'Massage Therapy', descripton: 'Massage therapy is the manipulation of soft tissues of the body including, muscles, connective tissues, tendons, ligaments and joints.', thumbnail: 'The assessment and diagnosis of soft tissue and joints of the body', price: 45, image: '../docs/Massage_Therapy.jpg'},
            ])
        })
        .then(()=> {
          return knex('providers')
            .returning('*')
            .insert([
              {id: 1, user_id: 1, first_name: 'Matthew', last_name: 'Adess', title: 'Acupuncture', bio:'Matthew Adess is a Clinician Educator in medical oncology at NorthShore with an expertise in gastrointestinal cancer and benign hematology. He earned his medical degree from Loyola University of Chicago’s Stritch School of Medicine, where he also completed an internship, residency, and post-doctoral fellowship in hematology/oncology. Dr. Adess is an active member of the regional leadership board of the Lake County American Cancer Society.', gender:'M', age: 38, pimage:'../img/providers/Matthew.jpg'},
              {id: 2, user_id: 2, first_name: 'Marshall', last_name: 'Baker', title: 'Chiropractor', bio:'Marshall Baker is a board-certified surgeon with an expertise in general surgery, oncologic surgery, and pancreatic cancer. He is a Clinical Assistant Professor at the University of Chicago Pritzker School of Medicine. He earned his medical degree from Dartmouth Medical School and completed an internship at Georgetown University. Dr. Baker also completed a residency at Northwestern University, as well as a fellowship at both Northwestern University McGaw Medical Center and Indiana University School of Medicine.', gender:'M', age: 46, pimage:'../img/providers/Marshall.jpg'},
              {id: 3, user_id: 3, first_name: 'Stacey', last_name: 'Becker', title: 'Physician Assistant', bio:'Stacey Becker is a nationally certified physician assistant specializing in thoracic oncology at NorthShore’s Kellogg Cancer Center. She completed her Bachelor of Arts degree in Behavioral Neuroscience from Lehigh University in Bethlehem, Pennsylvania and then earned her Master of Science at Arcadia University in Philadelphia, Pennsylvania. Ms. Becker is a past member of the Board of Directors for the Association of Physician Assistants in Oncology (APAO). She is certified by the National Commission for Certification of Physician Assistants.', gender:'F', age: 39, pimage:'../img/providers/Stacey.jpg'},
              {id: 4, user_id: 4, first_name: 'Tiffany', last_name: 'Benfield', title: 'Nurse Practitioner', bio:'Tiffany Benfield is family nurse practitioner who specializes in head and neck cancer, sarcoma, melanoma and palliative care at NorthShore Kellogg Cancer Center. She completed her Bachelor of Science in Nursing at the University of North Carolina at Charlotte and then earned her Master of Science degree at DePaul University in Chicago, Illinois. She holds two national board certifications with the American Nurses Credentialing Center (ANCC) as a family nurse practitioner as well as a palliative care nurse practitioner', gender:'M', age: 42, pimage:'../img/providers/Tiffany.jpg'},
              {id: 5, user_id: 5, first_name: 'Mihir', last_name: 'Bhayani', title: 'physiotherapist', bio:'Mihir Bhayani is a board certified otolaryngologist with specialty expertise in head and neck cancer. Dr. Bhayani earned his medical degree from the University of Utah School of Medicine. He completed his residency in otolaryngology-head and neck surgery at University of Chicago Hospitals and completed fellowship training in head and neck surgery at University of Texas-M.D. Anderson Cancer Center. In addition to English, Dr. Bhayani speaks Gujurati.', gender:'M', age: 44, pimage:'../img/providers/Mihir.jpg'},
              {id: 6, user_id: 6, first_name: 'William', last_name: 'Bloomer', title: 'Chiropractor', bio:'Bloomer is Clinical Professor of Cellular and Radiation Oncology at the University of Chicago Pritzker School of Medicine. He is board certified in both therapeutic radiology and nuclear medicine. He has expertise in breast, prostate, lung and gastrointestinal cancer. He trained at Harvard Medical School and was on the faculty there for 12 years. Before coming to NorthShore, he had been the Benedum Professor and Chairman of Radiation Oncology at the University of Pittsburgh.', gender:'M', age: 60, pimage:'../img/providers/William.jpg'},
              {id: 7, user_id: 7, first_name: 'Tammy', last_name: 'Brown', title: 'Nurse Practitioner', bio:'Tammy Brown is an adult nurse practitioner who specializes in gastrointestinal oncology at NorthShore Kellogg Cancer Center. She completed her Bachelor of Science in Nursing at Lamar University in Beaumont, Texas and then earned her Master of Science degree at North Park University in Chicago, Illinois. She holds a national certification with the American Academy of Nurse Practitioners.', gender:'F', age: 41, pimage:'../img/providers/Tammy.jpg'},
              {id: 8, user_id: 8, first_name: 'Nicholas', last_name: 'Campbell', title: 'Massage Therapist', bio:'Nicholas Campbell is a medical oncologist with an expertise in thoracic, head and neck malignancies. He earned his medical degree at the Medical College of Georgia and completed both his residency in Internal Medicine and then fellowship in Medical Hematology/Oncology at the University of Chicago where he served as Chief Fellow. Dr. Campbell’s clinical research interests include novel therapeutics, trial development, and bio-repository database management.', gender:'M', age: 39, pimage:'../img/providers/Nicholas.jpg'},
              {id: 9, user_id: 9, first_name: 'Alla', last_name: 'Gimelfarb', title: 'Acupuncture', bio:'Dr. Alla Gimelfarb is a hematology oncologist with expertise in benign and malignant hematology as well as thoracic oncology. She is a Clinician Educator at University of Chicago Pritzker School of Medicine. She earned her medical degree at the University of Illinois at Chicago and completed her internship, residency, and post-doctoral fellowship in hematology/oncology at Rush University Medical Center. Dr. Gimelfarb speaks both English and Russian.', gender:'F', age: 31, pimage:'../img/providers/Alla.jpg'},
              {id: 10, user_id: 10, first_name: 'Britt', last_name: 'Hanson', title: 'Health Care Assistant', bio:'Britt Hanson is a board-certified hematologist with expertise in lung cancer and melanoma. She earned her medical degree from Des Moines University College of Osteopathic Medicine and completed post-doctoral fellowship training in hematology/oncology at Loyola University Medical Center/Hines Veterans Administration. Dr. Hanson is a Clinician Educator at the University of Chicago Pritzker School of Medicine.', gender:'F', age: 45, pimage:'../img/providers/Britt.jpg'}
            ])
          })
          .then(function () {
              return knex('clients')
                .returning('*')
                .insert([
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
                  {id: 25, user_id: 25, first_name: 'Charles', last_name: 'Simmons', phone: '7782341030', address:'2191 Reserve St, WestVan', gender:'F', age: 55, m_history:'surgery in neck'}
              ]);
            })
            .then(function () {
              return knex('service_provider')
                .returning('*')
                .insert([
                  {id: 1, provider_id: 1, service_id: 2},
                  {id: 2, provider_id: 2, service_id: 4},
                  {id: 3, provider_id: 2, service_id: 6},
                  {id: 4, provider_id: 3, service_id: 1},
                  {id: 5, provider_id: 3, service_id: 5},
                  {id: 6, provider_id: 3, service_id: 6},
                  {id: 7, provider_id: 4, service_id: 3},
                  {id: 8, provider_id: 4, service_id: 5},
                  {id: 9, provider_id: 5, service_id: 1},
                  {id: 10, provider_id: 5, service_id: 6},
                  {id: 11, provider_id: 6, service_id: 4},
                  {id: 12, provider_id: 6, service_id: 6},
                  {id: 13, provider_id: 7, service_id: 3},
                  {id: 14, provider_id: 7, service_id: 5},
                  {id: 15, provider_id: 8, service_id: 6},
                  {id: 16, provider_id: 8, service_id: 1},
                  {id: 17, provider_id: 9, service_id: 2},
                  {id: 18, provider_id: 10, service_id: 5},
                  {id: 19, provider_id: 10, service_id: 6}
              ]);
            })
              .then(function () {
                return knex('appointments')
                  .returning('*')
                  .insert([
                    {id: 1, client_id: 12, provider_id: 7, service_id: 2, date: 'Jun 8th 18', start_time: '20'},
                    {id: 2, client_id: 14, provider_id: 2, service_id: 4, date: 'Jun 7th 18', start_time: '19'},
                    {id: 3, client_id: 14, provider_id: 3, service_id: 6, date: 'Jun 8th 18', start_time: '20'},
                    {id: 4, client_id: 13, provider_id: 1, service_id: 1, date: 'Jun 8th 18', start_time: '20'},
                    {id: 5, client_id: 14, provider_id: 5, service_id: 5, date: 'Jun 8th 18', start_time: '20'},
                    {id: 6, client_id: 14, provider_id: 3, service_id: 6, date: 'Jun 8th 18', start_time: '20'},
                    {id: 7, client_id: 15, provider_id: 4, service_id: 3, date: 'Jun 8th 18', start_time: '20'},
                    {id: 8, client_id: 13, provider_id: 3, service_id: 5, date: 'Jun 8th 18', start_time: '20'},
                    {id: 9, client_id: 17, provider_id: 4, service_id: 1, date: 'Jun 8th 18', start_time: '20'},
                    {id: 10, client_id: 15, provider_id: 4, service_id: 6, date: 'Jun 8th 18', start_time: '20'},
                    {id: 11, client_id: 14, provider_id: 1, service_id: 4, date: 'Jun 8th 18', start_time: '20'},
                    {id: 12, client_id: 18, provider_id: 6, service_id: 6, date: 'Jun 8th 18', start_time: '20'},
                    {id: 13, client_id: 22, provider_id: 1, service_id: 3, date: 'Jun 8th 18', start_time: '20'},
                    {id: 14, client_id: 24, provider_id: 1, service_id: 5, date: 'Jun 8th 18', start_time: '20'},
                    {id: 15, client_id: 12, provider_id: 2, service_id: 6, date: 'Jun 8th 18', start_time: '20'},
                    {id: 16, client_id: 19, provider_id: 7, service_id: 1, date: 'Jun 8th 18', start_time: '20'},
                    {id: 17, client_id: 16, provider_id: 6, service_id: 2, date: 'Jun 8th 18', start_time: '20'},
                    {id: 18, client_id: 12, provider_id: 2, service_id: 5, date: 'Jun 8th 18', start_time: '20'},
                    {id: 19, client_id: 13, provider_id: 3, service_id: 6, date: 'Jun 8th 18', start_time: '20'}
                ]);
              })
              .then(function () {
                return knex('reviews')
                  .returning('*')
                  .insert([
                    {id: 1, client_id: 12, provider_id: 7, rating: 4, description:'test --review for provider p7', date: 'Jun 8th 11'},
                    {id: 2, client_id: 14, provider_id: 2, rating: 4, description:'test ---review for provider p2', date: 'Jun 7th 14'},
                    {id: 3, client_id: 14, provider_id: 3, rating: 5, description:'test review for provider p3', date: 'Jun 8th 12'},
                    {id: 4, client_id: 13, provider_id: 1, rating: 3, description:'test review for provider p1', date: 'Jun 8th 16'},
                    {id: 5, client_id: 14, provider_id: 5, rating: 5, description:'test ***review for provider p5', date: 'Jun 8th 16'},
                    {id: 6, client_id: 14, provider_id: 3, rating: 5, description:'test @@@review for provider p3', date: 'Jun 8th 17'},
                    {id: 7, client_id: 15, provider_id: 4, rating: 2, description:'test ***review for provider p4', date: 'Jun 8th 12'},
                    {id: 8, client_id: 13, provider_id: 3, rating: 3, description:'test @@review for provider p3', date: 'Jun 8th 19'},
                    {id: 9, client_id: 17, provider_id: 4, rating: 4, description:'test !!review for provider p4', date: 'Jun 8th 18'}
                ]);
              });
    });
  return createUsers;
};

