output "elastic_ip" {
  description = "Elastic IP — use this for any manual DNS entries"
  value       = aws_eip.main.public_ip
}

output "ecr_registry" {
  description = "ECR registry base URL — copy to GitHub Actions variable AWS_ECR_REGISTRY"
  value       = "${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.aws_region}.amazonaws.com"
}

output "ecr_app_url" {
  description = "Full ECR URL for liamnet-app"
  value       = aws_ecr_repository.app.repository_url
}

output "ecr_server_url" {
  description = "Full ECR URL for liamnet-server"
  value       = aws_ecr_repository.server.repository_url
}

output "github_actions_role_arn" {
  description = "Copy this ARN to GitHub Actions variable AWS_DEPLOY_ROLE_ARN"
  value       = aws_iam_role.github_actions.arn
}
