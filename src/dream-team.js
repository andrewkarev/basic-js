
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const myteam = members.filter(item => typeof item === 'string');
  const secretName = myteam.map(name => name.trim()[0].toUpperCase()).sort().join('');

  return secretName;
}

module.exports = {
  createDreamTeam
};
