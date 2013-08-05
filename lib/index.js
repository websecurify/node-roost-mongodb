exports.roost = function (opt, manifest, provider) {
	if (!manifest.hasOwnProperty('mongo')) {
		return;
	}
	
	var mongo = manifest.mongo;
	
	if (!mongo.hasOwnProperty('install') || !mongo.install) {
		return;
	}
	
	if (!manifest.hasOwnProperty('bootstrap')) {
		manifest.bootstrap = [];
	}
	
	var url = 'http://downloads-distro.mongodb.org/repo/ubuntu-upstart';
	var dst = '/etc/apt/sources.list.d/10gen.list';
	
	manifest.bootstrap.push('sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10');
	manifest.bootstrap.push('echo "deb ' + url + ' dist 10gen" | sudo tee -a ' + dst)
	
	if (!manifest.hasOwnProperty('apt')) {
		manfiest.apt = {};
	}
	
	manifest.apt.udpate = true;
	
	if (!manifest.hasOwnProperty('packages')) {
		manifest.packages = {};
	}
	
	manifest.packages['mongodb-10gen'] = true;
	
	if (!manifest.hasOwnProperty('services')) {
		manifest.services = {};
	}
	
	manifest.services['mongodb'] = true;
};
