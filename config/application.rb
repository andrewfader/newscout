require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Newscout
  class Application < Rails::Application
    config.load_defaults 5.1

    config.action_dispatch.default_headers = {
      'Access-Control-Allow-Origin' => "chrome-extension://*"
    }
  end
end
