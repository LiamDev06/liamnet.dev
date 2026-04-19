resource "aws_security_group" "main" {
  name        = "${var.app_name}-sg"
  description = "Security group for ${var.app_name} EC2 instance"

  ingress {
    description = "HTTP - Lets Encrypt and redirect"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.app_name}-sg"
  }
}

resource "aws_eip" "main" {
  domain = "vpc"

  tags = {
    Name = "${var.app_name}-eip"
  }
}

resource "aws_eip_association" "main" {
  instance_id   = aws_instance.main.id
  allocation_id = aws_eip.main.id
}

resource "aws_instance" "main" {
  ami                    = var.ec2_ami
  instance_type          = var.ec2_instance_type
  key_name               = var.ec2_key_pair_name
  vpc_security_group_ids = [aws_security_group.main.id]
  iam_instance_profile   = aws_iam_instance_profile.ec2.name

  lifecycle {
    prevent_destroy = true
    ignore_changes = [
      ami,
      user_data,
      tags,
    ]
  }

  tags = {
    Name = var.app_name
  }
}
