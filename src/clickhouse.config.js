const port = process.env.NODE_PORT || 9012;

const options = {
	url: process.env.CLICKHOUSE_URL,
	port: process.env.CLICKHOUSE_PORT || 8123,
	debug: false,
	basicAuth: null,
	isUseGzip: false,
	format: "json",
	raw: false,
	config: {
		session_id                              : 'session_id if neeed',
		session_timeout                         : 60,
		output_format_json_quote_64bit_integers : 0,
		enable_http_compression                 : 0,
		database                                : 'my_database_name',
	},
	

	reqParams: {}
};

const queries = [
	`CREATE TABLE valodik (
		date Date,
		time DateTime,
		mark String,
		ips Array(UInt32),
		queries Nested (
			act String,
			id UInt32
		)
	)
	ENGINE=MergeTree(date, (mark, time), 8192)`,

	'OPTIMIZE TABLE ukit.loadstat PARTITION 201807 FINAL'
];

module.exports = {
    port,
    options,
    queries
}

