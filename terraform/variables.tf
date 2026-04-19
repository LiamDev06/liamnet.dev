variable "aws_region" {
  description = "AWS region where resources are deployed"
  type        = string
  default     = "eu-north-1"
}

variable "app_name" {
  description = "Application name used as a prefix for all resource names"
  type        = string
  default     = "liamnet"
}

variable "ec2_instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.small"
}

variable "ec2_ami" {
  description = "AMI ID of the existing instance — find in AWS Console under EC2 > Instances"
  type        = string
}

variable "ec2_key_pair_name" {
  description = "Name of the existing EC2 SSH key pair"
  type        = string
}

variable "github_org" {
  description = "GitHub org or username that owns the repo (used for OIDC trust policy)"
  type        = string
  default     = "LiamDev06"
}

variable "github_repo" {
  description = "GitHub repository name (used for OIDC trust policy)"
  type        = string
  default     = "liamnet.dev"
}
