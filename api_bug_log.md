
(bug 1)
To see why this extension failed to compile, please check the mkmf.log which can
be found here:

C:/Ruby26-x64/lib/ruby/gems/2.6.0/extensions/x64-mingw32/2.6.0/sqlite3-1.4.2/mkmf.log

extconf failed, exit code 1

Gem files will remain installed in
C:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/sqlite3-1.4.2 for inspection.
Results logged to
C:/Ruby26-x64/lib/ruby/gems/2.6.0/extensions/x64-mingw32/2.6.0/sqlite3-1.4.2/gem_make.out

An error occurred while installing sqlite3 (1.4.2), and Bundler cannot continue.
Make sure that `gem install sqlite3 -v '1.4.2' --source 'https://rubygems.org/'`
succeeds before bundling.

In Gemfile:
  sqlite3
         run  bundle binstubs bundler
Could not find gem 'sqlite3 (~> 1.4) x64-mingw32' in any of the gem sources
listed in your Gemfile.

solucion:

quitar la gema del gemfile (vamos a usar postgres)

++++++++++++++++++++++++++++++++++++++++++++++++
