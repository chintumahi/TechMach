const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial Database Seed Schema
const defaultData = {
  users: [
    { id: 'usr_1', name: 'Priy Ranjan Kumar', username: 'priy_ranjan', email: 'priyranjan@gmail.com', mobile: '9876543210', passwordHash: 'password123', createdAt: Date.now() - 86400000 * 5 },
    { id: 'usr_2', name: 'Khushboo Kumari', username: 'khushboo_k', email: 'khushboo@gmail.com', mobile: '9876543211', passwordHash: 'password123', createdAt: Date.now() - 86400000 * 3 },
    { id: 'usr_3', name: 'Amit Singh', username: 'amit_singh', email: 'amit@gmail.com', mobile: '9876543212', passwordHash: 'password123', createdAt: Date.now() - 86400000 * 2 }
  ],
  otp_verifications: [],
  attempts: [
    { id: 'att_1', userId: 'usr_1', userName: 'Priy Ranjan Kumar', username: 'priy_ranjan', categoryKey: 'stet_history_full', categoryName: 'STET 2025: इतिहास (Full Mock Test - 150 Q)', correct: 142, wrong: 6, unanswered: 2, total: 150, rawScore: 140.5, maxScore: 150, percentage: 94, accuracy: 96, timeTakenSeconds: 5800, date: Date.now() - 86400000 * 2 },
    { id: 'att_2', userId: 'usr_1', userName: 'Priy Ranjan Kumar', username: 'priy_ranjan', categoryKey: 'stet_full', categoryName: 'STET 2025: COMPUTER SCIENCE (Full Mock Test)', correct: 135, wrong: 12, unanswered: 3, total: 150, rawScore: 132, maxScore: 150, percentage: 88, accuracy: 92, timeTakenSeconds: 6100, date: Date.now() - 86400000 * 1 },
    { id: 'att_3', userId: 'usr_2', userName: 'Khushboo Kumari', username: 'khushboo_k', categoryKey: 'stet_history_full', categoryName: 'STET 2025: इतिहास (Full Mock Test - 150 Q)', correct: 138, wrong: 10, unanswered: 2, total: 150, rawScore: 135.5, maxScore: 150, percentage: 90, accuracy: 93, timeTakenSeconds: 5900, date: Date.now() - 86400000 * 1 },
    { id: 'att_4', userId: 'usr_3', userName: 'Amit Singh', username: 'amit_singh', categoryKey: 'cf', categoryName: 'Computer Fundamentals', correct: 22, wrong: 3, unanswered: 0, total: 25, rawScore: 21.25, maxScore: 25, percentage: 85, accuracy: 88, timeTakenSeconds: 1200, date: Date.now() - 86400000 * 1 }
  ]
};

function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      writeDb(defaultData);
      return defaultData;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return defaultData;
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.error('[DB WRITE ERROR]', e);
  }
}

// User Model Methods
function findUserByMobile(input) {
  const db = readDb();
  const clean = String(input).trim().toLowerCase();
  const digitsOnly = clean.replace(/\D/g, '');
  return db.users.find(u => {
    if (clean.includes('@')) {
      const unamePrefix = clean.split('@')[0];
      return (u.email && u.email.toLowerCase() === clean) ||
             (u.username && u.username.toLowerCase() === clean) ||
             (u.username && u.username.toLowerCase().includes(unamePrefix)) ||
             clean.includes(u.username.toLowerCase());
    }
    return (digitsOnly.length > 0 && String(u.mobile).replace(/\D/g, '') === digitsOnly) ||
           (u.email && u.email.toLowerCase() === clean) ||
           (u.username && u.username.toLowerCase() === clean);
  });
}

function findUserByUsernameOrMobile(input) {
  const db = readDb();
  const clean = String(input).trim().toLowerCase();
  const digitsOnly = clean.replace(/\D/g, '');
  return db.users.find(u => {
    if (clean.includes('@')) {
      const unamePrefix = clean.split('@')[0];
      return (u.email && u.email.toLowerCase() === clean) ||
             (u.username && u.username.toLowerCase() === clean) ||
             (u.username && u.username.toLowerCase().includes(unamePrefix)) ||
             clean.includes(u.username.toLowerCase());
    }
    return (u.username && u.username.toLowerCase() === clean) || 
           (u.email && u.email.toLowerCase() === clean) ||
           (digitsOnly.length >= 10 && String(u.mobile).replace(/\D/g, '') === digitsOnly);
  });
}

function createUser(userData) {
  const db = readDb();
  const newUser = {
    id: 'usr_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
    name: userData.name,
    username: userData.username.toLowerCase(),
    mobile: String(userData.mobile).replace(/\D/g, ''),
    passwordHash: userData.password,
    createdAt: Date.now()
  };
  db.users.push(newUser);
  writeDb(db);
  return newUser;
}

function updateUserPassword(mobileOrEmail, newPassword) {
  const db = readDb();
  const clean = String(mobileOrEmail).trim().toLowerCase();
  const digitsOnly = clean.replace(/\D/g, '');
  const user = db.users.find(u => 
    (u.email && u.email.toLowerCase() === clean) ||
    (u.username && u.username.toLowerCase() === clean) ||
    (digitsOnly.length >= 10 && String(u.mobile).replace(/\D/g, '') === digitsOnly)
  );
  if (user) {
    user.passwordHash = newPassword;
    writeDb(db);
    return true;
  }
  return false;
}

function getAllUsers() {
  const db = readDb();
  return db.users;
}

// Attempts Model Methods
function getAllAttempts() {
  const db = readDb();
  return db.attempts;
}

function saveAttempt(attempt) {
  const db = readDb();
  const newAttempt = {
    id: 'att_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
    ...attempt,
    date: Date.now()
  };
  db.attempts.push(newAttempt);
  writeDb(db);
  return newAttempt;
}

// OTP Verifications Model Methods
function getOtpVerifications() {
  const db = readDb();
  return db.otp_verifications;
}

function saveOtpVerifications(records) {
  const db = readDb();
  db.otp_verifications = records;
  writeDb(db);
}

module.exports = {
  readDb,
  writeDb,
  findUserByMobile,
  findUserByUsernameOrMobile,
  createUser,
  updateUserPassword,
  getAllUsers,
  getAllAttempts,
  saveAttempt,
  getOtpVerifications,
  saveOtpVerifications
};
