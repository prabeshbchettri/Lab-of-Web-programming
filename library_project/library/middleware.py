import time


class LoggingMiddleware:
    """Logs HTTP request details and execution time"""
    
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Record start time
        start_time = time.time()
        
        # Get response
        response = self.get_response(request)
        
        # Calculate execution time
        execution_time = time.time() - start_time
        
        # Log request info
        print(f"{request.method} {request.path} completed in {execution_time:.2f} seconds")
        
        return response
