export const APILIST = [{
    Title: 'Basic resource monitoring',

    type: [{
        Title: 'Prometheus self-monitoring',
        value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/prometheus-self-monitoring/embedded-exporter.yml',
        rules: '28 rules',
        description: 'Monitors Prometheus health and performance using built-in exporters.'
    }, {
        Title: 'Host and hardware',
        value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/host-and-hardware/node-exporter.yml',
        rules: '38 rules',
        description: 'Monitors system resources like CPU, memory, and disk usage.'
    }, {
        Title: 'S.M.A.R.T Device Monitoring',
        value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/s.m.a.r.t-device-monitoring/smartctl-exporter.yml',
        rules: '5 rules',
        description: 'Monitors hard drives using SMART data for hardware health.'
    }, {
        Title: 'Docker containers',
        value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/docker-containers/google-cadvisor.yml',
        rules: '8 rules',
        description: 'Monitors Docker containers using cAdvisor to track resource usage.'
    }, {
        Title: 'Blackbox',
        value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/blackbox/blackbox-exporter.yml',
        rules: '9 rules',
        description: 'Monitors network services with Blackbox exporter for HTTP, TCP, etc.'
    }, {
        Title: 'Windows Server',
        value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/windows-server/windows-exporter.yml',
        rules: '10 rules',
        description: 'Monitors Windows servers by exporting system metrics.'
    }, {
        Title: 'VMware',
        value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/vmware/pryorda-vmware-exporter.yml',
        rules: '5 rules',
        description: 'Monitors VMware environments for virtualization performance.'
    }, {
        Title: 'Netdata',
        value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/netdata/embedded-exporter.yml',
        rules: '9 rules',
        description: 'Monitors real-time performance data using Netdata exporter.'
    }]
    

}, {

    Title: 'Databases and brokers',
    type: [
        {
            Title: 'MySQL down',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/mysql/mysqld-exporter.yml',
            rules: '10 rules',
            description: 'Monitors MySQL server for downtime and related metrics.'
        },
        {
            Title: 'PostgreSQL',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/postgresql/postgres-exporter.yml',
            rules: '21 rules',
            description: 'Monitors PostgreSQL database performance and health.'
        },
        {
            Title: 'SQL Server',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/sql-server/ozarklake-mssql-exporter.yml',
            rules: '2 rules',
            description: 'Monitors SQL Server metrics for performance and stability.'
        },
        {
            Title: 'Patroni',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/patroni/embedded-exporter-patroni.yml',
            rules: '1 rules',
            description: 'Monitors Patroni clusters for failover and health.'
        },
        {
            Title: 'PGBouncer',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/pgbouncer/spreaker-pgbouncer-exporter.yml',
            rules: '3 rules',
            description: 'Monitors PGBouncer for connection pooling efficiency.'
        },
        {
            Title: 'Redis',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/redis/oliver006-redis-exporter.yml',
            rules: '12 rules',
            description: 'Monitors Redis server performance and memory usage.'
        },
        {
            Title: 'MongoDB',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/mongodb/percona-mongodb-exporter.yml',
            rules: '7 rules',
            description: 'Monitors MongoDB database health and replication metrics.'
        },
        {
            Title: 'RabbitMQ',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/rabbitmq/rabbitmq-exporter.yml',
            rules: '9 rules',
            description: 'Monitors RabbitMQ queues and message throughput.'
        },
        {
            Title: 'Elasticsearch',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/elasticsearch/prometheus-community-elasticsearch-exporter.yml',
            rules: '19 rules',
            description: 'Monitors Elasticsearch cluster health and indexing performance.'
        },
        {
            Title: 'Meilisearch',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/meilisearch/embedded-exporter.yml',
            rules: '2 rules',
            description: 'Monitors Meilisearch performance and indexing operations.'
        },
        {
            Title: 'Cassandra',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/cassandra/instaclustr-cassandra-exporter.yml',
            rules: '12 rules',
            description: 'Monitors Cassandra cluster health and node status.'
        },
        {
            Title: 'Clickhouse',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/clickhouse/embedded-exporter.yml',
            rules: '14 rules',
            description: 'Monitors Clickhouse database performance and query latency.'
        },
        {
            Title: 'Zookeeper',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/zookeeper/dabealu-zookeeper-exporter.yml',
            rules: '4 rules',
            description: 'Monitors Zookeeper nodes for availability and performance.'
        },
        {
            Title: 'Kafka',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/kafka/danielqsj-kafka-exporter.yml',
            rules: '2 rules',
            description: 'Monitors Kafka clusters for message throughput and lag.'
        },
        {
            Title: 'Pulsar',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/pulsar/embedded-exporter.yml',
            rules: '10 rules',
            description: 'Monitors Pulsar messaging system for throughput and latencies.'
        },
        {
            Title: 'Nats',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/nats/nats-exporter.yml',
            rules: '20 rules',
            description: 'Monitors NATS messaging system for connection and throughput.'
        },
        {
            Title: 'Solr',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/solr/embedded-exporter.yml',
            rules: '4 rules',
            description: 'Monitors Solr search platform for indexing and search performance.'
        },
        {
            Title: 'Hadoop',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/hadoop/jmx_exporter.yml',
            rules: '10 rules',
            description: 'Monitors Hadoop cluster performance and job completion times.'
        }
    ]
    
}, {
    Title: 'Reverse proxies and load balancers',
    type: [
        {
            Title: 'Nginx',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/nginx/knyar-nginx-exporter.yml',
            rules: '3 rules',
            description: 'Monitors Nginx server performance, traffic, and errors.'
        },
        {
            Title: 'Apache',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/apache/lusitaniae-apache-exporter.yml',
            rules: '3 rules',
            description: 'Monitors Apache server performance and request handling.'
        },
        {
            Title: 'HaProxy',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/haproxy/embedded-exporter-v2.yml',
            rules: '14 rules',
            description: 'Monitors HAProxy load balancer traffic and health checks.'
        },
        {
            Title: 'Traefik',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/traefik/embedded-exporter-v2.yml',
            rules: '3 rules',
            description: 'Monitors Traefik proxy for requests and routing performance.'
        }
    ]
    
},
{
    Title: 'Runtimes',
    type: [
        {
            Title: 'PHP-FPM',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/php-fpm/bakins-fpm-exporter.yml',
            rules: '1 rules',
            description: 'Monitors PHP-FPM for performance metrics and request handling.'
        },
        {
            Title: 'JVM',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/jvm/jvm-exporter.yml',
            rules: '1 rules',
            description: 'Monitors Java Virtual Machine performance and memory usage.'
        },
        {
            Title: 'Sidekiq',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/sidekiq/strech-sidekiq-exporter.yml',
            rules: '2 rules',
            description: 'Monitors Sidekiq job processing and queue metrics.'
        }
    ]
    
}, {
    Title: 'Orchestrators',
    type: [
        {
            Title: 'Kubernetes',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/kubernetes/kubestate-exporter.yml',
            rules: '34 rules',
            description: 'Monitors Kubernetes cluster states and health metrics.'
        },
        {
            Title: 'Nomad',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/kubernetes/kubestate-exporter.yml',
            rules: '4 rules',
            description: 'Monitors Nomad jobs and their performance metrics.'
        },
        {
            Title: 'Consul',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/consul/consul-exporter.yml',
            rules: '3 rules',
            description: 'Monitors Consul service discovery and health status.'
        },
        {
            Title: 'Etcd : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/etcd/embedded-exporter.yml',
            rules: '13 rules',
            description: 'Monitors Etcd key-value store performance and metrics.'
        },
        {
            Title: 'Linkerd : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/linkerd/embedded-exporter.yml',
            rules: '1 rules',
            description: 'Monitors Linkerd service mesh performance and traffic metrics.'
        },
        {
            Title: 'Istio : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/istio/embedded-exporter.yml',
            rules: '10 rules',
            description: 'Monitors Istio service mesh metrics and performance.'
        },
        {
            Title: 'ArgoCD : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/argocd/embedded-exporter.yml',
            rules: '2 rules',
            description: 'Monitors ArgoCD for GitOps and deployment metrics.'
        }
    ]
    
}, {
    Title: 'Network, security and storage',
    type: [
        {
            Title: 'Ceph : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/ceph/embedded-exporter.yml',
            rules: '13 rules',
            description: 'Monitors Ceph cluster health and performance metrics.'
        },
        {
            Title: 'SpeedTest : Speedtest exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/speedtest/nlamirault-speedtest-exporter.yml',
            rules: '2 rules',
            description: 'Monitors internet speed and latency using Speedtest.'
        },
        {
            Title: 'ZFS : node-exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/zfs/node-exporter.yml',
            rules: '1 rules',
            description: 'Monitors ZFS storage pool metrics.'
        },
        {
            Title: 'OpenEBS : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/openebs/embedded-exporter.yml',
            rules: '1 rules',
            description: 'Monitors OpenEBS storage metrics.'
        },
        {
            Title: 'Minio : Embedded exporter',
            value: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/minio/embedded-exporter.yml",
            rules: '3 rules',
            description: 'Monitors Minio object storage metrics.'
        },
        {
            Title: 'SSL/TLS : ssl_exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/ssl/tls/ribbybibby-ssl-exporter.yml',
            rules: '4 rules',
            description: 'Monitors SSL/TLS certificate expiration and status.'
        },
        {
            Title: 'Juniper : czerwonk/junos_exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/juniper/czerwonk-junos-exporter.yml',
            rules: '3 rules',
            description: 'Monitors Juniper devices and network metrics.'
        },
        {
            Title: 'CoreDNS : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/coredns/embedded-exporter.yml',
            rules: '1 rules',
            description: 'Monitors CoreDNS metrics and performance.'
        },
        {
            Title: 'Freeswitch : znerol/prometheus-freeswitch-exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/freeswitch/znerol-freeswitch-exporter.yml',
            rules: '3 rules',
            description: 'Monitors FreeSWITCH call metrics and performance.'
        },
        {
            Title: 'Hashicorp Vault : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/hashicorp-vault/embedded-exporter.yml',
            rules: '4 rules',
            description: 'Monitors HashiCorp Vault health and performance metrics.'
        },
        {
            Title: 'Cloudflare : lablabs/cloudflare-exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/cloudflare/lablabs-cloudflare-exporter.yml',
            rules: '2 rules',
            description: 'Monitors Cloudflare metrics and API usage.'
        }
    ]
    
},
{
    Title: 'Other',
    type: [
        {
            Title: 'Ceph : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/ceph/embedded-exporter.yml',
            rules: '13 rules',
            description: 'Monitors Ceph cluster health and performance metrics.'
        },
        {
            Title: 'SpeedTest : Speedtest exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/speedtest/nlamirault-speedtest-exporter.yml',
            rules: '2 rules',
            description: 'Monitors internet speed and latency using Speedtest.'
        },
        {
            Title: 'ZFS : node-exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/zfs/node-exporter.yml',
            rules: '1 rules',
            description: 'Monitors ZFS storage pool metrics.'
        },
        {
            Title: 'OpenEBS : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/openebs/embedded-exporter.yml',
            rules: '1 rules',
            description: 'Monitors OpenEBS storage metrics.'
        },
        {
            Title: 'Minio : Embedded exporter',
            value: "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/minio/embedded-exporter.yml",
            rules: '3 rules',
            description: 'Monitors Minio object storage metrics.'
        },
        {
            Title: 'SSL/TLS : ssl_exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/ssl/tls/ribbybibby-ssl-exporter.yml',
            rules: '4 rules',
            description: 'Monitors SSL/TLS certificate expiration and status.'
        },
        {
            Title: 'Juniper : czerwonk/junos_exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/juniper/czerwonk-junos-exporter.yml',
            rules: '3 rules',
            description: 'Monitors Juniper devices and network metrics.'
        },
        {
            Title: 'CoreDNS : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/coredns/embedded-exporter.yml',
            rules: '1 rules',
            description: 'Monitors CoreDNS metrics and performance.'
        },
        {
            Title: 'Freeswitch : znerol/prometheus-freeswitch-exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/freeswitch/znerol-freeswitch-exporter.yml',
            rules: '3 rules',
            description: 'Monitors FreeSWITCH call metrics and performance.'
        },
        {
            Title: 'Hashicorp Vault : Embedded exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/hashicorp-vault/embedded-exporter.yml',
            rules: '4 rules',
            description: 'Monitors HashiCorp Vault health and performance metrics.'
        },
        {
            Title: 'Cloudflare : lablabs/cloudflare-exporter',
            value: 'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/cloudflare/lablabs-cloudflare-exporter.yml',
            rules: '2 rules',
            description: 'Monitors Cloudflare metrics and API usage.'
        }
    ]
    
}

]