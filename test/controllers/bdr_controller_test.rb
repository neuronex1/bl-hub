require 'test_helper'

class BdrControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get bdr_index_url
    assert_response :success
  end

end
