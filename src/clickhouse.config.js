const port = process.env.NODE_PORT || 9012;

const options = {
	url: process.env.CLICKHOUSE_HOST || "192.168.171.139",
	port: process.env.CLICKHOUSE_PORT || 8123,
	debug: false,
	basicAuth: null,
	isUseGzip: false,
	format: "json",
	raw: false,
	config: {
		session_timeout                         : 60,
		output_format_json_quote_64bit_integers : 0,
		enable_http_compression                 : 0,
		database                                : 'click',
	},
	reqParams: {}
};

const queries = [
	'CREATE DATABASE [IF NOT EXISTS] valodik [ON CLUSTER cluster] [ENGINE = engine(...)]',
    `CREATE TABLE recipes
		(
			title String,
			ingredients Array(String),
			directions Array(String),
			link String,
			source LowCardinality(String),
			NER Array(String)
		) ENGINE = MergeTree ORDER BY title;`
];

module.exports = {
    port,
    options,
    queries
}

