module PostsHelper
  def splash(c, a, id, daytime)
    if c == 'posts' && a == 'show' && id == '1'
      "<div id=\"splash\" class=\"#{am_or_pm(daytime)}\"></div>".html_safe
    end
  end
    
  def am_or_pm(daytime)
    daytime == 'am' ? 'am' : 'pm'
  end
end
