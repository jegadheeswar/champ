# SCM Connector

Connect your source code repositories (GitHub, GitLab) to trigger workflows and manage deployments.

## Supported Platforms

- GitHub
- GitLab
- Bitbucket (coming soon)

## Connecting a Repository

1. Go to **SCM Connector**
2. Click **+ Add Repository**
3. Authorize CloudMaSa to access your account
4. Select repository and branch

## Webhooks

CloudMaSa automatically sets up webhooks to trigger workflows on:
- Push events
- Pull requests
- Tags

## Branch Protection

Enforce policies:
- Require approvals before merge
- Block merges if tests fail

---

> 💡 You can connect multiple repositories — e.g., frontend, backend, infra.