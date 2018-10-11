source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'coffee-rails'
gem 'hamlit'
gem 'devise'
gem 'excon'
gem 'lol_dba'
gem 'pg'
gem 'puma'
gem 'rack-cors'
gem 'rails'
gem 'redis'
gem 'sass-rails'
gem 'turbolinks'
gem 'uglifier'

group :development, :test do
  gem 'byebug'
  gem 'spirit_hands', github: "steakknife/spirit_hands", branch: 'deprecate-autoload'
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'rspec'
end

group :development do
  gem 'binding_of_caller'
  gem 'better_errors'
  gem 'web-console'
  gem 'listen'
  gem 'spring'
  gem 'spring-watcher-listen'
end
