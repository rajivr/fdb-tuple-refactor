initSidebarItems({"constant":[["FDB_API_VERSION","Maximum API version supported by the client"]],"enum":[["NetworkOption","A set of options that can be set globally for the FDB API."]],"fn":[["open_database","Returns [`FdbDatabase`] handle to the FDB cluster identified by the provided cluster file."],["select_api_version","Select the version of the client API."],["set_network_option","Set global options for the FDB API."],["start_network","Initializes FDB network."],["stop_network","Stops the FDB networking engine."]],"mod":[["database","Provides [`FdbDatabase`] type for working with FDB Database."],["error","Provides [`FdbError`] type, [`FdbResult`] type alias and error constants."],["future","Provides [`FdbFuture`], [`FdbStreamKeyValue`] types and [`FdbFutureGet`] trait for working with FDB Future."],["range","Provides types for working with FDB range."],["subspace","Provides a convenient way to define namespaces for different categories of data."],["system_data","Functions and constants documenting the organization of the reserved keyspace in the database beginning with `\\xFF`."],["tenant","Provides [`FdbTenant`] type for working with FDB Tenants."],["transaction","Provides types and traits for working with FDB Transactions and Snapshots."],["tuple","Provides a set of utilities for serializing and deserializing typed data for use in FDB."]],"struct":[["Key","[`Key`] represents a FDB key, a lexicographically-ordered sequence of bytes."],["KeySelector","[`KeySelector`] identifies a particular key in the database."],["KeyValue","A key/value pair."],["MappedKeyValue","A mapped key/value pair."],["Mapper","[`Mapper`] represents the behaviour of a mapped range read."],["Tenant","[`Tenant`] is a named key-space within a database."],["Value","[`Value`] represents a value of an FDB [`Key`] and is a sequence of bytes."]]});