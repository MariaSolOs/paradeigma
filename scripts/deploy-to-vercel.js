// @ts-check

// Utility script for deploying to Vercel when the git commit message
// contains 'deploy to vercel' (ignoring case) as a substring.

const triggerMessage = 'deploy to vercel';
const commitMessage = process.env['VERCEL_GIT_COMMIT_MESSAGE'];

if (commitMessage?.toLowerCase().includes(triggerMessage)) {
    console.log('Vercel deployment triggered.');
    process.exit(1);
} else {
    console.log('Vercel deployment skipped.');
    process.exit(0);
}
