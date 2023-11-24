// Recompilation count: 0
export function robynSendsSixteenEmailsA_cf3a99({}: {}): number {
  const totalEmails = 16;
  const workEmails = 7;
  const familyEmails = (totalEmails - workEmails) * (2 / 3);
  const otherEmails = totalEmails - workEmails - familyEmails;
  const boyfriendEmails = otherEmails * (1 / 3);
  return Math.round(boyfriendEmails);
}
