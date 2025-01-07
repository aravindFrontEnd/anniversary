// src/data/aws-questions.js
export const awsQuestions = [
    {
      question: "What is the default timeout for a Lambda function?",
      options: ["1 second", "3 seconds", "15 minutes", "3 minutes"],
      correct: 2
    },
    {
      question: "Which AWS service is used for sending transactional emails?",
      options: ["SES", "SNS", "SQS", "SWF"],
      correct: 0
    },
    {
      question: "What's the maximum size of a single S3 object?",
      options: ["1GB", "5TB", "1TB", "500GB"],
      correct: 1
    },
    {
      question: "Which service would you use for storing session data in a web application?",
      options: ["S3", "EBS", "ElastiCache", "EFS"],
      correct: 2
    },
    {
      question: "What's the purpose of an IAM Role?",
      options: [
        "To authenticate users",
        "To grant permissions to AWS services",
        "To encrypt data",
        "To monitor resources"
      ],
      correct: 1
    },
    {
      question: "Which service provides managed Kubernetes clusters?",
      options: ["ECS", "EKS", "ECR", "Fargate"],
      correct: 1
    },
    {
      question: "What's the primary purpose of Amazon CloudFront?",
      options: [
        "Load Balancing",
        "Content Delivery Network",
        "DNS Management",
        "Auto Scaling"
      ],
      correct: 1
    },
    {
      question: "Which database service offers 'serverless' configuration?",
      options: [
        "RDS",
        "DynamoDB",
        "Aurora",
        "All of the above"
      ],
      correct: 3
    },
    {
      question: "What's the maximum execution time for a Step Function state machine?",
      options: ["1 day", "30 days", "1 year", "No limit"],
      correct: 2
    },
    {
      question: "Which service is used for real-time data streaming?",
      options: ["SQS", "SNS", "Kinesis", "EventBridge"],
      correct: 2
    },
    {
      question: "What's the purpose of AWS CloudFormation?",
      options: [
        "Infrastructure as Code",
        "Load Balancing",
        "Monitoring",
        "Authentication"
      ],
      correct: 0
    },
    {
      question: "Which service provides managed Elasticsearch?",
      options: ["OpenSearch Service", "ElastiCache", "RDS", "DynamoDB"],
      correct: 0
    },
    {
      question: "What's the default storage class for S3?",
      options: [
        "Standard",
        "Intelligent-Tiering",
        "One Zone-IA",
        "Glacier"
      ],
      correct: 0
    },
    {
      question: "Which service is used for container image storage?",
      options: ["ECS", "ECR", "EKS", "Fargate"],
      correct: 1
    },
    {
      question: "What's the primary purpose of AWS WAF?",
      options: [
        "Load Balancing",
        "Web Application Firewall",
        "File Storage",
        "Database Management"
      ],
      correct: 1
    }
  ];